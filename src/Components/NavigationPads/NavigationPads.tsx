import { useDashboardContext } from '../../Context/DashboardContext'
import style from './navigationPads.module.css'

const NavigationPads = () => {
  const { pageActive, setPageActive } = useDashboardContext()

  return (
    <div className={style.container}>
      <ul>
        <li
          className={pageActive === 'services' ? style.active : ''}
          onClick={() => (pageActive !== 'services' ? setPageActive('services') : {})}>
          <i className={`fi fi-br-vacuum`} />
          <span>Servicios</span>
        </li>

        <li
          className={pageActive === 'messages' ? style.active : ''}
          onClick={() => (pageActive !== 'messages' ? setPageActive('messages') : {})}>
          <i className={`fi fi-br-messages`} />
          <span>Mensajes</span>
        </li>
      </ul>
    </div>
  )
}

export default NavigationPads
