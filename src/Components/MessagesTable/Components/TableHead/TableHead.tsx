import style from './tableHead.module.css'

const TableHead = () => {
  const COLUMS_MESSAGES = ['id', 'nombre', 'email', 'mensaje']

  return (
    <thead className={style.tableHead}>
      <tr className={style.tableRow}>
        {COLUMS_MESSAGES.map((item, idx) => (
          <td key={idx}>{item}</td>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
