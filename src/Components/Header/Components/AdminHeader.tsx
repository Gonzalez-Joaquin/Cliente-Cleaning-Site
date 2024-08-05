import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { resetUser } from '../../../Store/Reducers/user.reducer'
import RoutesModel from '../../../Models/routes.models'
import style from '../header.module.css'
import { Button } from '../../'

const AdminHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <header className={style.appHeader}>
      <button className={style.button} onClick={() => navigate(RoutesModel.HOME)}>
        <i className="fi fi-br-angle-left" />
      </button>
      <div className={style.content}>
        <h3 className={style.title}>Panel Administrativo</h3>
        <Button
          value={'Salir'}
          type="button"
          styles="default"
          icon="exit"
          onClick={() => {
            dispatch(resetUser())
          }}
        />
      </div>
    </header>
  )
}

export default AdminHeader
