import { Navigate, Outlet } from 'react-router-dom'

import Routes from '../Models/routes.models'
import { useAppSelector } from '../Hooks/useRedux'

const AuthGuard = () => {
  const user = useAppSelector(state => state.user)

  return user.name !== '' ? <Outlet /> : <Navigate replace to={Routes.HOME} />
}

export default AuthGuard
