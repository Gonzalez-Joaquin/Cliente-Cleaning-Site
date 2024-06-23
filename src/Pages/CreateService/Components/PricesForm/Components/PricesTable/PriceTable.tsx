import style from './priceTable.module.css'

interface Props {
  priceList: Array<{ name: string; price: number }>
  handleEdit: (index: number) => void
  handleRemove: (index: number) => void
}

const PriceTable = ({ priceList, handleEdit, handleRemove }: Props) => {
  return (
    <table className={style.table}>
      <thead className={style.tableHead}>
        <tr className={style.tableRow}>
          <td>ID</td>
          <td>Nombre</td>
          <td>Precio</td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody className={style.tableBody}>
        {priceList.map((price, index) => (
          <tr key={index} className={style.tableRow}>
            <td className={style.id}>{index}</td>
            <td className={style.name}>{price.name}</td>
            <td className={style.price}>{price.price}</td>
            <td className={style.actions}>
              <i className={`fi fi-br-pencil ${style.edit}`} onClick={() => handleEdit(index)} />
              <i className={`fi fi-br-trash ${style.trash}`} onClick={() => handleRemove(index)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PriceTable
