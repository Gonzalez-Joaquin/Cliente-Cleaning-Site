import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { PageDescription, PageGalery, PageHeader, Prices } from './Components'
import { useAppSelector, useAppDispatch } from '../../Hooks/useRedux'
import { setServices } from '../../Store/Reducers/services.reducer'
import { getServices } from '../../Store/Thunks/service.thunks'
import { IServiceData } from '../../Data/services.data'
import Loading from '../LoadingPage/LoadingPage'
import style from './services.module.css'

const Services = () => {
  const dispatch = useAppDispatch()
  const { listOfServices } = useAppSelector(state => state.services)
  const [service, setService] = useState<IServiceData | null>(null)
  const { id } = useParams()

  useEffect(() => {
    if (listOfServices.length === 0) {
      const storedServices = sessionStorage.getItem('services')
      if (storedServices) {
        const parsedServices: IServiceData[] = JSON.parse(storedServices)
        dispatch(setServices(parsedServices))
        const object = parsedServices.find(item => item.id === id)
        setService(object || parsedServices[0])
      } else {
        dispatch(getServices()).then(() => {
          const newListOfServices =
            listOfServices.length > 0 ? listOfServices : JSON.parse(sessionStorage.getItem('services') || '[]')
          const object = newListOfServices.find((item: IServiceData) => item.id === id)
          setService(object || newListOfServices[0])
        })
      }
    } else {
      const object = listOfServices.find(item => item.id === id)
      setService(object || listOfServices[0])
    }
  }, [id, listOfServices, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!service) {
    return <Loading />
  }

  return (
    <section className={style.section}>
      <PageHeader title={service.title} icon={service.icon} />
      <PageDescription page={service.page} />
      <PageGalery information={service.information} />
      <div className={style.divisoryDiv} style={{ backgroundImage: `url(${service.portada})` }}></div>
      <Prices prices={service.prices} title={'Precios'} />
    </section>
  )
}

export default Services
