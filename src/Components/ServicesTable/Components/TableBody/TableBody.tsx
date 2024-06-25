import { useDashboardContext } from '../../../../Context/DashboardContext'
import style from '../../serviceTable.module.css'
import TableRow from '../TableRow/TableRow'

const TableBody = () => {
  const { services } = useDashboardContext()

  return (
    <tbody className={style.tableBody}>
      {services
        ? services?.length > 0
          ? services.map((item, idx) => (
              <TableRow
                key={item.id}
                service={{ ...item, quantityServices: item.prices.length }}
                lastRow={idx + 1 === services.length}
              />
            ))
          : null
        : null}
    </tbody>
  )
}

export default TableBody
