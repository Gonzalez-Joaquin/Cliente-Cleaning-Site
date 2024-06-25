import { useNavigate } from 'react-router-dom'
import { Element } from 'react-scroll'
import { useState } from 'react'

import RoutesModel, { HomeModel } from '../../../../Models/routes.models'
import { useAppSelector } from '../../../../Hooks/useRedux'
import { Button } from '../../../../Components'
import { CardServices } from './Components'
import style from './services.module.css'

const Services = () => {
  const { listOfServices } = useAppSelector(state => state.services)
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  const servicesPerPage = 6
  const indexOfLastService = currentPage * servicesPerPage
  const indexOfFirstService = indexOfLastService - servicesPerPage
  const currentServices = listOfServices.slice(indexOfFirstService, indexOfLastService)

  const totalPages = Math.ceil(listOfServices.length / servicesPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }


  
  return (
    <Element className={style.element} name={HomeModel.SERVICES}>
      <section className={style.section}>
        <article className={style.article}>
          <div className={style.containerData}>
            <h2 className={style.title}>Nuestros Servicios</h2>
            <div className={style.shape}></div>
            <div className={style.container}>
              {currentServices.map(item =>
                item.active ? (
                  <CardServices
                    item={item}
                    key={item.id}
                    onClick={() => navigate(`/${RoutesModel.SERVICES}/${item.id}`)}
                  />
                ) : null
              )}
            </div>
            {totalPages > 1 ? (
              <div className={style.pagination}>
                <Button icon="angle-left" onClick={prevPage} disabled={currentPage === 1} />
                <span>{`Página ${currentPage} de ${totalPages}`}</span>
                <Button icon="angle-right" onClick={nextPage} disabled={currentPage === totalPages} />
              </div>
            ) : null}
          </div>
        </article>
      </section>
    </Element>
  )
}

export default Services
