import { useState } from 'react'
import { Button } from '../../../../../Components'
import { useAppSelector } from '../../../../../Hooks/useRedux'
import { useWindowSize } from '../../../../../Hooks/useWindowSize'
import style from '../prices.module.css'

interface Props {
  item: {
    id: number
    name: string
    price: number
  }
  handleEdit: (param: number) => void
  handleDelete: (param: number) => void
}

// Agregamos una nueva propiedad `showActions` para manejar el despliegue de acciones
const PriceTableRow = ({ item, handleEdit, handleDelete }: Props) => {
  const name = useAppSelector(state => state.user.name)
  const [showActions, setShowActions] = useState(false)
  const [width] = useWindowSize()

  const toggleActions = () => {
    setShowActions(!showActions)
  }

  return (
    <tr
      className={style.row}
      onClick={() => {
        if (width < 1025) {
          toggleActions()
        }
      }}>
      <td className={style.name}>{item.name}</td>
      <td className={style.price}>${item.price}</td>
      {name !== '' ? (
        <td className={`${style.actions} ${width < 1025 && showActions ? style.view : ''}`}>
          <Button icon="trash" iconClassName={style.red} styles="default" onClick={() => handleDelete(item.id)} />
          <Button icon="pencil" styles="default" onClick={() => handleEdit(item.id)} />
        </td>
      ) : null}
    </tr>
  )
}

export default PriceTableRow
