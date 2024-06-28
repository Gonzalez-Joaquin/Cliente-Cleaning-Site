import React, { createContext, useState, useContext, useMemo } from 'react'
import { IServiceData } from '../Data/services.data'
import { useAppSelector } from '../Hooks/useRedux'
import { IMessageData } from '../Store/Reducers/contacts.reducer'

interface IDashboardContext {
  pageActive: 'services' | 'messages'
  setPageActive: React.Dispatch<React.SetStateAction<'services' | 'messages'>>
  services: Array<IServiceData> | undefined
  messages: Array<IMessageData> | undefined
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
  const [pageActive, setPageActive] = useState<'messages' | 'services'>('services')
  const { listOfServices } = useAppSelector(state => state.services)
  const { listOfMessages } = useAppSelector(state => state.messages)
  const [searchValue, setSearchValue] = useState<string>('')

  const services = useMemo(() => {
    if (listOfServices) {
      return listOfServices.filter(service => service.title?.toLowerCase().includes(searchValue.toLowerCase()))
    }
  }, [listOfServices, searchValue])

  const messages = useMemo(() => {
    return listOfMessages.filter(message => message.name?.toLowerCase().includes(searchValue.toLowerCase()))
  }, [listOfMessages, searchValue])

  return (
    <DashboardContext.Provider value={{ messages, services, pageActive, setPageActive, searchValue, setSearchValue }}>
      {children}
    </DashboardContext.Provider>
  )
}
