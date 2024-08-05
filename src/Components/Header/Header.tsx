import { useLocation } from 'react-router-dom'

import { AdminHeader, DynamicHeader, MainHeader } from './Components'
import RoutesModel from '../../Models/routes.models'
import { useMemo } from 'react'

const HeaderSwitch = () => {
  const location = useLocation()
  const path = location.pathname

  const renderHeader = useMemo(() => {
    if (path.includes(RoutesModel.LOGIN)) {
      return <></>
    } else if (path.includes(RoutesModel.SOCIAL)) {
      return <></>
    } else if (path.includes(RoutesModel.DASHBOARD)) {
      return <AdminHeader />
    } else if (path.includes(RoutesModel.CREATE) || path.includes(RoutesModel.SERVICES)) {
      return <DynamicHeader />
    }
    return <MainHeader />
  }, [path])

  return renderHeader
}

export default HeaderSwitch
