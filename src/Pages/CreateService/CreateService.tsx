import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { GeneralInfoForm, PageInfoForm, InformationForm, PricesForm, StepsLayout } from './Components'
import { addService, editService } from '../../Store/Thunks/service.thunks'
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux'
import { IServiceData } from '../../Data/services.data'
import { useToast } from '../../Context/ToastContext'
import RoutesModel from '../../Models/routes.models'
import style from './createService.module.css'

interface ICreateServiceContext {
  step: number
  isEditing: boolean
  serviceData: IServiceData | null
  setGeneralInfo: (generalInfo: Partial<IServiceData>) => void
  setPageInfo: (pageInfo: Partial<IServiceData['page']>) => void
  setInformation: (information: Array<IServiceData['information'][0]>) => void
  setPrices: (prices: Array<IServiceData['prices'][0]>) => void
  handleGoBack: () => void
}

const CreateServiceContext = createContext<ICreateServiceContext>({
  step: 1,
  serviceData: null,
  isEditing: false,
  setGeneralInfo: () => {},
  setPageInfo: () => {},
  setInformation: () => {},
  setPrices: () => {},
  handleGoBack: () => {},
})

// Hook personalizado para usar el contexto
export const useCreateService = () => useContext(CreateServiceContext)

const CreateService = () => {
  const { listOfServices } = useAppSelector(state => state.services)
  const dispatch = useAppDispatch()
  const { showToast } = useToast()
  const navigate = useNavigate()
  // Estado para manejar los pasos y los datos
  const [step, setStep] = useState<number>(1) // Comienza en el paso 1
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [serviceData, setServiceData] = useState<IServiceData>({
    id: '',
    title: '',
    icon: '',
    portada: '',
    desc: '',
    active: true,
    page: {
      title: '',
      desc: '',
      text: [],
    },
    information: [],
    prices: [],
  })
  const { id } = useParams()

  // Funciones para manejar los datos y avanzar los pasos
  const setGeneralInfo = (generalInfo: Partial<IServiceData>) => {
    setServiceData(prevData => ({
      ...prevData,
      ...generalInfo,
    }))
    setStep(2) // Avanzar al paso 2: Página
  }

  const setPageInfo = (pageInfo: Partial<IServiceData['page']>) => {
    setServiceData(prevData => ({
      ...prevData,
      page: {
        ...prevData.page,
        ...pageInfo,
      },
    }))
    setStep(3) // Avanzar al paso 3: Información
  }

  const setInformation = (information: Array<IServiceData['information'][0]>) => {
    setServiceData(prevData => ({
      ...prevData,
      information: information,
    }))
    setStep(4) // Avanzar al paso 4: Precios
  }

  const setPrices = (prices: Array<IServiceData['prices'][0]>) => {
    const updatedServiceData = {
      ...serviceData,
      prices: prices,
    }
    setServiceData(updatedServiceData)

    if (isEditing) {
      showToast('El servicio fue modificado con éxito!', 'success')
      dispatch(editService(updatedServiceData))
    } else {
      showToast('El servicio fue creado con éxito!', 'success')
      dispatch(addService(updatedServiceData))
    }
    navigate(`/${RoutesModel.DASHBOARD}`)
  }

  const handleGoBack = () => {
    setStep(step > 1 ? step - 1 : 1)
  }

  useEffect(() => {
    if (id) {
      const response = listOfServices.find(item => item.id === id)

      if (!response) return

      setServiceData(response)
      setIsEditing(true)
    }
  }, [id])

  return (
    <CreateServiceContext.Provider
      value={{
        step,
        isEditing,
        serviceData,
        setGeneralInfo,
        setPageInfo,
        setInformation,
        handleGoBack,
        setPrices,
      }}>
      <section className={style.createService}>
        <StepsLayout step={step} />
        <article className={style.article}>
          {step === 1 && <GeneralInfoForm />}
          {step === 2 && <PageInfoForm />}
          {step === 3 && <InformationForm />}
          {step === 4 && <PricesForm />}
        </article>
      </section>
    </CreateServiceContext.Provider>
  )
}

export default CreateService
