import { useDashboardContext } from '../../../../Context/DashboardContext'
import { useAppSelector } from '../../../../Hooks/useRedux'
import style from '../../serviceTable.module.css'
import TableRow from '../TableRow/TableRow'

const TableBody = () => {
  const { services } = useDashboardContext()
  const isLoading = useAppSelector(state => state.services.loadingService)
  return (
    <tbody className={style.tableBody}>
      {services
        ? services?.length > 0
          ? services.map((item, idx) => (
              <TableRow
                key={item.id}
                idx={idx}
                service={{ ...item, quantityServices: item.prices.length }}
                lastRow={idx + 1 === services.length}
              />
            ))
          : null
        : null}
      {isLoading ? (
        <tr className={style.loading}>
          <td>
            <span></span>
          </td>
          <td>
            <span></span>
          </td>
        </tr>
      ) : null}
    </tbody>
  )
}

export default TableBody
