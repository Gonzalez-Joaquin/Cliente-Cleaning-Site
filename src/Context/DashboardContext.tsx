// context/DashboardContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react'
import { IServiceData } from '../Data/services.data'
import { useAppSelector } from '../Hooks/useRedux'

interface IDashboardContext {
  services: Array<IServiceData>
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
  const [services, setServices] = useState<Array<IServiceData>>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const listOfServices = useAppSelector(state => state.services)

  useEffect(() => {
    const filteredServices = listOfServices.filter(service =>
      service.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    setServices(filteredServices)
  }, [listOfServices, searchValue])

  return (
    <DashboardContext.Provider value={{ services, searchValue, setSearchValue }}>{children}</DashboardContext.Provider>
  )
}
