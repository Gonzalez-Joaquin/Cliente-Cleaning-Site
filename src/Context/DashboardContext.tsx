import React, { createContext, useState, useContext, useEffect, useMemo } from 'react'
import { IServiceData } from '../Data/services.data'
import { useAppSelector } from '../Hooks/useRedux'

interface IDashboardContext {
  services: Array<IServiceData> | undefined
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const DashboardContext = createContext<IDashboardContext | undefined>(undefined)

export const useDashboardContext = () => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error('useDashboardContext must be used within a DashboardContextProvider')
  }
  return context
}

interface Props {
  children: JSX.Element | Array<JSX.Element>
}

export const DashboardContextProvider = ({ children }: Props) => {
  const { listOfServices } = useAppSelector(state => state.services)
  const [searchValue, setSearchValue] = useState<string>('')

  const services = useMemo(() => {
    if (listOfServices) {
      return listOfServices.filter(service => service.title?.toLowerCase().includes(searchValue.toLowerCase()))
    }
  }, [listOfServices, searchValue])

  return (
    <DashboardContext.Provider value={{ services, searchValue, setSearchValue }}>{children}</DashboardContext.Provider>
  )
}
