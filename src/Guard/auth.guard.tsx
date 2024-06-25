import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '../Hooks/useRedux'
import Routes from '../Models/routes.models'

const AuthGuard = () => {
  const user = useAppSelector(state => state.user)

  return user.name !== '' ? <Outlet /> : <Navigate replace to={Routes.HOME} />
}

export default AuthGuard
