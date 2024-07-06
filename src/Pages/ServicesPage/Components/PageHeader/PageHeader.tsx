import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import RoutesModel, { HomeModel } from '../../../../Models/routes.models'
import style from './pageHeader.module.css'

import foto from '../../../../Assets/Backgrounds/alfombraLiquido.jpg'

interface Props {
  title: string
  icon: string
}

const PageHeader = ({ title, icon }: Props) => {
  const navigate = useNavigate()
  const [breadcrumb, setBreadcrumb] = useState<Array<{ value: string; link?: string }>>([])

  useEffect(() => {
    setBreadcrumb([
      {
        value: HomeModel.HOME,
        link: RoutesModel.HOME,
      },
      {
        value: HomeModel.SERVICES,
      },
      {
        value: title,
      },
    ])
  }, [title])

  return (
    <div className={style.pageHeader} style={{ background: `url(${foto})` }}>
      <div>
        <h2 className={style.title}>{title}</h2>
        <div className={style.shape}>
          <div></div>
          <i className={`fi fi-br-${icon}`} />
          <div></div>
        </div>
        <div className={style.breadcums}>
          {breadcrumb.map((item, idx) =>
            item.link ? (
              <a key={idx} onClick={() => navigate(`/${RoutesModel.HOME}`)}>
                {idx !== 0 ? '> ' : ''}
                {item.value}
              </a>
            ) : (
              <span key={idx}>
                {idx !== 0 ? '> ' : ''}
                {item.value}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
