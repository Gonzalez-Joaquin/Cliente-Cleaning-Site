import style from './prices.module.css'

interface Props {
  title: string
  prices: Array<{
    name: string
    price: number
  }>
}

const Prices = ({ prices, title }: Props) => {
  return (
    <article className={style.prices}>
      <h2>{title}</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.services}>Servicio</th>
            <th className={style.price}>Precio</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {prices.map((item, idx) => (
            <tr key={idx}>
              <td className={style.name}>{item.name}</td>
              <td className={style.price}>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}

export default Prices
