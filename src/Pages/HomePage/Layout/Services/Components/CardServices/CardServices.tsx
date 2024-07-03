import { IServiceData } from '../../../../../../Data/services.data'
import style from './cardServices.module.css'

interface Props {
  item: IServiceData
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const CardServices = ({ item, onClick }: Props) => {
  return (
    <div className={style.container} onClick={onClick}>
      <div>
        <div className={style.icon}>
          <i className={`fi fi-br-${item.icon}`} />
        </div>
        <div className={style.data}>
          <h4>{item.title}</h4>
          <p>{item.desc.length > 100 ? item.desc.slice(0, 100) + '...' : item.desc}</p>
          <button className={style.button}>leer más</button>
        </div>
      </div>
    </div>
  )
}

export default CardServices
