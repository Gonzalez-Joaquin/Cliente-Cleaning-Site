import { useEffect } from 'react'

import { useDashboardContext } from '../Context/DashboardContext'
import { useAppSelector } from './useRedux'

const useDashboard = () => {
  const { services, searchValue, setSearchValue } = useDashboardContext()

  const listOfServices = useAppSelector(state => state.services)

  useEffect(() => {
    setSearchValue('')
  }, [listOfServices, setSearchValue])

  return {
    services,
    searchValue,
    setSearchValue,
  }
}

export default useDashboard
