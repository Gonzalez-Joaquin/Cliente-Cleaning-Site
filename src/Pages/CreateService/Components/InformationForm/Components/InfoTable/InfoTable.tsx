import { useWindowSize } from '../../../../../../Hooks/useWindowSize'
import style from './infoTable.module.css'

interface InfoProps {
  img: string
  title: string
  text: string
}

interface Props {
  informationList: Array<InfoProps>
  handleEdit: (index: number) => void
  handleRemove: (index: number) => void
}

const InfoTable = ({ informationList, handleEdit, handleRemove }: Props) => {
  const [width] = useWindowSize()

  return (
    <table className={style.table}>
      <thead className={style.tableHead}>
        <tr className={style.tableRow}>
          <td>ID</td>
          <td>Imagen</td>
          <td>Título</td>
          <td>Descripción</td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody className={style.tableBody}>
        {informationList.map((info, index) => (
          <tr
            key={index}
            className={style.tableRow}
            onClick={() => {
              if (width < 1025) {
                handleEdit(index)
              }
            }}>
            <td className={style.id}>{index}</td>
            <td className={style.image}>
              <img src={info.img} alt={info.title} />
            </td>
            <td className={style.title}>{info.title}</td>
            <td className={style.text}>{info.text || 'Sin descripción asignada.'}</td>
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

export default InfoTable
