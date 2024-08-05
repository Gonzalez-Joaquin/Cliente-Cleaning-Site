import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../Hooks/useRedux'
import { resetUser } from '../../../Store/Reducers/user.reducer'
import RoutesModel from '../../../Models/routes.models'
import style from '../header.module.css'
import { Button } from '../../'

const DynamicHeader = () => {
  const user = useAppSelector(state => state.user)
  const location = window.location.pathname
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <header className={style.appHeader}>
      <button
        className={style.button}
        onClick={() => navigate(location.includes(RoutesModel.CREATE) ? RoutesModel.DASHBOARD : RoutesModel.HOME)}>
        <i className="fi fi-br-angle-left" />
      </button>
      <div className={style.content}>
        <h3 className={style.title}>
          {location.includes(RoutesModel.SERVICES)
            ? 'Servicios'
            : location.includes(RoutesModel.CREATE)
            ? 'Crear Servicio'
            : null}
        </h3>
        {user.name !== '' ? (
          <Button
            value={'Salir'}
            type="button"
            styles="default"
            icon="exit"
            onClick={() => {
              dispatch(resetUser())
            }}
          />
        ) : null}
      </div>
    </header>
  )
}

export default DynamicHeader
