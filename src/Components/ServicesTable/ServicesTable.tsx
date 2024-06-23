import { TableBody, TableHead } from './Components'
import TableFooter from './Components/TableFooter/TableFooter'
import style from './serviceTable.module.css'

const ServicesTable = () => {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <TableHead />
        <TableBody />
        <TableFooter />
      </table>
    </div>
  )
}

export default ServicesTable
