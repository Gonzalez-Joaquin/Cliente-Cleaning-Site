import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../Hooks/useRedux'
import RoutesModel from '../../Models/routes.models'
import style from './socialMediasPage.module.css'

const SocialMediasPage = () => {
  const ContactListData = useAppSelector(state => state.social)
  const navigate = useNavigate()

  return (
    <section className={style.section}>
      <article className={style.articleSocialMedias}>
        <div className={style.container}>
          <h1>Limpieza De Tapizados</h1>
          <p>
            Renovamos y dejamos impecable todo tipo de tapizados, quitando manchas, acaros, olores y suciedad.
            Eliminando hasta la última mancha y particula de polvo
          </p>
        </div>
        <ul className={style.list}>
          {ContactListData.map(item => (
            <li key={item.id} className={style.listButton}>
              {item.name ? (
                <a href={item.link}>
                  {item.name}
                  <i className={`fi fi-brands-${item.icon}`} />
                </a>
              ) : (
                <a href={item.link}>
                  <i className={`fi fi-brands-${item.icon}`}></i>
                  {item.content}
                </a>
              )}
            </li>
          ))}
          <li key={ContactListData.length + 1} className={style.listButton}>
            <a onClick={() => navigate(`/${RoutesModel.HOME}`)}>
              Nuestra Página
              <i className={'fi fi-br-globe'} />
            </a>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default SocialMediasPage
