import { useAppSelector } from '../../Hooks/useRedux'
import style from './socialMediasPage.module.css'

const SocialMediasPage = () => {
  const ContactListData = useAppSelector(state => state.social)

  return (
    <section className={style.section}>
      <article className={style.articleSocialMedias}>
        <h2>GB Cleaning Site</h2>
        <ul className={style.list}>
          {ContactListData.map(item => (
            <li key={item.id} className={style.listButton}>
              {item.name ? (
                <a>{item.name}</a>
              ) : (
                <a>
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
