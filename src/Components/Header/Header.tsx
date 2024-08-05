import { useLocation } from 'react-router-dom'

import { AdminHeader, DynamicHeader, MainHeader } from './Components'
import RoutesModel from '../../Models/routes.models'

const HeaderSwitch = () => {
  const location = useLocation()
  const path = location.pathname

  const renderHeader = () => {
    if (path.includes(RoutesModel.DASHBOARD)) {
      return <AdminHeader />
    } else if (path.includes(RoutesModel.CREATE) || path.includes(RoutesModel.SERVICES)) {
      return <DynamicHeader />
    } else if (path.includes(RoutesModel.LOGIN) || path.includes(RoutesModel.SOCIAL)) {
      return <></>
    }
    return <MainHeader />
  }

  return renderHeader()
}

export default HeaderSwitch
