import style from './messageTable.module.css'

import { TableBody, TableFooter, TableHead } from './Components'

const MessagesTable = () => {
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

export default MessagesTable
