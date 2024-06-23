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
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default CardServices
