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

const PriceTableRow = ({ item, handleEdit, handleDelete }: Props) => {
  const [width] = useWindowSize()
  const name = useAppSelector(state => state.user.name)

  return (
    <tr
      className={style.row}
      onClick={() => {
        if (width < 1025) {
          handleEdit(item.id)
        }
      }}>
      <td className={style.name}>{item.name}</td>
      <td className={style.price}>${item.price}</td>
      {width > 1025 && name !== '' ? (
        <td className={style.actions}>
          <div>
            <Button icon="trash" iconClassName={style.red} styles="default" onClick={() => handleDelete(item.id)} />
            <Button icon="pencil" styles="default" onClick={() => handleEdit(item.id)} />
          </div>
        </td>
      ) : null}
    </tr>
  )
}

export default PriceTableRow
