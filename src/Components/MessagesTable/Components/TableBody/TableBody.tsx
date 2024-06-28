import { useDashboardContext } from '../../../../Context/DashboardContext'
import style from '../../messageTable.module.css'
import { TableRow } from '..'

const TableBody = () => {
  const { messages } = useDashboardContext()

  return (
    <tbody className={style.tableBody}>
      {messages
        ? messages?.length > 0
          ? messages.map((item, idx) => (
              <TableRow key={item.id} idx={idx} message={item} lastRow={idx + 1 === messages.length} />
            ))
          : null
        : null}
    </tbody>
  )
}

export default TableBody
