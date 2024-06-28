import { useAppSelector } from '../../Hooks/useRedux'
import style from './socialMediasPage.module.css'

const SocialMediasPage = () => {
  const ContactListData = useAppSelector(state => state.social)

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
        </ul>
      </article>
    </section>
  )
}

export default SocialMediasPage
