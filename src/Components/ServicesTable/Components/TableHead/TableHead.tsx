import style from './tableHead.module.css'

const TableHead = () => {
  const COLUMS_SERVICES = ['id', 'titulo', 'icono', 'servicios', 'activo', 'acciones']

  return (
    <thead className={style.tableHead}>
      <tr className={style.tableRow}>
        {COLUMS_SERVICES.map((item, idx) => (
          <td key={idx}>{item}</td>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
