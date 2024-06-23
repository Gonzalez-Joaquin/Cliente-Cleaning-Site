// Importando estilos desde el archivo CSS
import styles from './pageDescription.module.css'

// Definiendo la interfaz Props
interface Props {
  page: {
    title: string
    desc: string
    text: Array<{ title: string; text: string }>
  }
}

const PageDescription = ({ page }: Props) => {
  const { title, desc } = page

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{desc}</p>
      </div>
      {/* <div className={styles.textContainer}>
        {text.map((item, index) => (
          <div key={index} className={styles.textItem}>
            <h3 className={styles.textTitle}>{item.title}</h3>
            <p className={styles.textContent}>{item.text}</p>
          </div>
        ))}
      </div> */}
    </article>
  )
}

export default PageDescription
