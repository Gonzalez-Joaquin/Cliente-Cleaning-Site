import { IMessageData } from '../../../../Pages/HomePage/Layout/Contact/Contact'
import { deleteMessage } from '../../../../Store/Thunks/message.thunks'
import OverflowTooltip from '../../../OverflowTooltip/OverflowTooltip'
import { useAppDispatch } from '../../../../Hooks/useRedux'
import style from './tableRow.module.css'
import { useWindowSize } from '../../../../Hooks/useWindowSize'

interface Props {
  idx: number
  message: IMessageData
  lastRow: boolean
  setMessageToRead: React.Dispatch<React.SetStateAction<IMessageData | null>>
}

const TableRow = ({ idx, message, lastRow, setMessageToRead }: Props) => {
  const [width] = useWindowSize()
  const dispatch = useAppDispatch()

  return (
    <tr
      className={`${style.tableRow} ${lastRow ? style.lastRow : ''}`}
      onClick={() => {
        if (width < 1025) {
          setMessageToRead(message)
        }
      }}>
      <td className={style.id}>{idx}</td>
      <td className={style.name}>
        <OverflowTooltip>{message.name}</OverflowTooltip>
      </td>
      <td className={style.email}>
        <OverflowTooltip>{message.email}</OverflowTooltip>
      </td>
      <td className={style.message}>
        <OverflowTooltip>{message.message}</OverflowTooltip>
      </td>
      <td
        className={style.trash}
        onClick={e => {
          e.stopPropagation()
          dispatch(deleteMessage(message.id))
        }}>
        <i className="fi fi-br-trash" />
      </td>
    </tr>
  )
}

export default TableRow
