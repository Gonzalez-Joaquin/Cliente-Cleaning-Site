import style from './cardData.module.css'

interface Props {
  img: string
  title: string
  text: string
  left?: boolean
}

const CardData = ({ img, title, text, left = false }: Props) => {
  return (
    <div className={`${style.container} ${left ? style.left : style.right}`}>
      <div className={style.image}>
        <img src={img} loading="lazy" />
      </div>
      <div className={style.data}>
        <h3>{title}</h3>
        <div className={style.shape}></div>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardData
