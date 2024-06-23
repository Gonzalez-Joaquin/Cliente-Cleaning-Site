import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { PageDescription, PageGalery, PageHeader, Prices } from './Components'
import style from './services.module.css'
import { useAppSelector } from '../../Hooks/useRedux'

const Services = () => {
  const ServicesPage = useAppSelector(state => state.services)
  const [service, setService] = useState(ServicesPage[0])
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const object = ServicesPage.find(item => item.id === +id)
      if (object) {
        setService(object)
      }
    }
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
