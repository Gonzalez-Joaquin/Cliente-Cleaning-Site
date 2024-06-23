import { useNavigate } from 'react-router-dom'

import { deleteService, toggleService } from '../../../../Store/Reducers/services.reducer'
import { useAppDispatch } from '../../../../Hooks/useRedux'
import { useToast } from '../../../../Context/ToastContext'
import RoutesModel from '../../../../Models/routes.models'
import style from './tableRow.module.css'
import { Toggle } from '../../..'

interface Props {
  service: {
    id: number
    title: string
    icon: string
    quantityServices: number
    active: boolean
  }
  lastRow: boolean
}

const TableRow = ({ service, lastRow }: Props) => {
  const { id, title, icon, quantityServices, active } = service
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { showToast } = useToast()
  return (
    <tr className={`${style.tableRow} ${lastRow ? style.lastRow : ''}`}>
      <td className={style.id}>{id}</td>
      <td className={style.title}>{title}</td>
      <td className={style.icon}>
        <i className={`fi fi-br-${icon}`} />
      </td>
      <td className={style.info}>
        <span className={style.tag}>
          {quantityServices}
          {quantityServices === 0 ? ' Sin servicios' : quantityServices > 1 ? ' Servicios' : ' Servicio'}
        </span>
      </td>
      <td className={style.service}>
        <Toggle id={id} value={active} onChange={() => dispatch(toggleService(id))} />
      </td>
      <td className={style.actions}>
        <i className={`fi fi-br-pencil ${style.edit}`} onClick={() => navigate(`/${RoutesModel.CREATE}/${id}`)} />
        <i
          className={`fi fi-br-trash ${style.trash}`}
          onClick={() => {
            dispatch(deleteService(id))
            showToast('El servicio fue eliminado con éxito.', 'success')
          }}
        />
      </td>
      <td className={style.flecha} onClick={() => navigate(`/${RoutesModel.SERVICES}/${id}`)}>
        <i className="fi fi-br-angle-right" />
      </td>
    </tr>
  )
}

export default TableRow
