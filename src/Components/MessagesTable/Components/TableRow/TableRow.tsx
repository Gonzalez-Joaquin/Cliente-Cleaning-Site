
import { IMessageData } from '../../../../Pages/HomePage/Layout/Contact/Contact'
import { deleteMessage } from '../../../../Store/Thunks/message.thunks'
import { useAppDispatch } from '../../../../Hooks/useRedux'
import style from './tableRow.module.css'

interface Props {
  idx: number
  message: IMessageData
  lastRow: boolean
}

const TableRow = ({ idx, message, lastRow }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <tr className={`${style.tableRow} ${lastRow ? style.lastRow : ''}`}>
      <td className={style.id}>{idx}</td>
      <td className={style.name}>{message.name}</td>
      <td className={style.email}>{message.email}</td>
      <td className={style.message}>{message.message}</td>
      <td className={style.trash} onClick={() => dispatch(deleteMessage(message.id))}>
        <i className="fi fi-br-trash" />
      </td>
    </tr>
  )
}

export default TableRow
