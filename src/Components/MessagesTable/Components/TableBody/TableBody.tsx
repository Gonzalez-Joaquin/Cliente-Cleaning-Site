import { useDashboardContext } from '../../../../Context/DashboardContext'
import style from '../../messageTable.module.css'
import { TableRow } from '..'
import { IMessageData } from '../../../../Store/Reducers/contacts.reducer'

interface Props {
  setMessageToRead: React.Dispatch<React.SetStateAction<IMessageData | null>>
}

const TableBody = ({ setMessageToRead }: Props) => {
  const { messages } = useDashboardContext()

  return (
    <tbody className={style.tableBody}>
      {messages
        ? messages?.length > 0
          ? messages.map((item, idx) => (
              <TableRow
                key={item.id}
                idx={idx}
                message={item}
                lastRow={idx + 1 === messages.length}
                setMessageToRead={setMessageToRead}
              />
            ))
          : null
        : null}
    </tbody>
  )
}

export default TableBody
