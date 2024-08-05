import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Suspense, lazy } from 'react'

import LoadingPage from './Pages/LoadingPage/LoadingPage'
import { ToastProvider } from './Context/ToastContext'
import HeaderSwitch from './Components/Header/Header'
import RoutesModel from './Models/routes.models'
import { RoutesWithNotFound } from './Utilities'
import AuthGuard from './Guard/auth.guard'
import store from './Store/store'

// Lazy Loading
const Login = lazy(() => import('./Pages/Login/Login'))
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'))
const ServicePage = lazy(() => import('./Pages/ServicesPage/ServicesPage'))
const DashboardPage = lazy(() => import('./Pages/DashboardPage/DashboardPage'))
const CreateService = lazy(() => import('./Pages/CreateService/CreateService'))
const SocialMediasPage = lazy(() => import('./Pages/SocialMediasPage/SocialMediasPage'))

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Provider store={store}>
        <ToastProvider>
          <BrowserRouter>
            <HeaderSwitch />
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={RoutesModel.DASHBOARD} />} />
              <Route path={RoutesModel.HOME} element={<HomePage />} />
              <Route path={`${RoutesModel.SERVICES}/:id`} element={<ServicePage />} />
              <Route path={`${RoutesModel.SOCIAL}`} element={<SocialMediasPage />} />
              <Route path={`${RoutesModel.LOGIN}`} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route path={RoutesModel.DASHBOARD} element={<DashboardPage />} />
                <Route path={`${RoutesModel.CREATE}`} element={<CreateService />} />
                <Route path={`${RoutesModel.CREATE}/:id`} element={<CreateService />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </ToastProvider>
      </Provider>
    </Suspense>
  )
}

export default App
