import { useNavigate } from 'react-router-dom'

import { toggleService } from '../../../../Store/Reducers/services.reducer'
import { deleteService } from '../../../../Store/Thunks/service.thunks'
import { useAppDispatch } from '../../../../Hooks/useRedux'
import { useToast } from '../../../../Context/ToastContext'
import RoutesModel from '../../../../Models/routes.models'
import style from './tableRow.module.css'
import { Toggle } from '../../..'
import { useWindowSize } from '../../../../Hooks/useWindowSize'

interface Props {
  idx: number
  service: {
    id: string
    title: string
    icon: string
    quantityServices: number
    active: boolean
  }
  lastRow: boolean
}

const TableRow = ({ idx, service, lastRow }: Props) => {
  const { id, title, icon, quantityServices, active } = service
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [width] = useWindowSize()

  return (
    <tr
      className={`${style.tableRow} ${lastRow ? style.lastRow : ''}`}
      onClick={() => {
        if (width < 1025) {
          navigate(`/${RoutesModel.CREATE}/${id}`)
        }
      }}>
      <td className={style.id}>{idx}</td>
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
            dispatch(deleteService(id, showToast))
          }}
        />
      </td>
      <td
        className={style.flecha}
        onClick={e => {
          e.stopPropagation()
          navigate(`/${RoutesModel.SERVICES}/${id}`)
        }}>
        <i className="fi fi-br-angle-right" />
      </td>
    </tr>
  )
}

export default TableRow
