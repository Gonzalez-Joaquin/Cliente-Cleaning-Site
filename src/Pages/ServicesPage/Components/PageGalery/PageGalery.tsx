import styles from './pageGalery.module.css'

interface Props {
  information: Array<{
    img: string
    title: string
    text: string
  }>
}

const PageGalery = ({ information }: Props) => {
  return (
    <article className={styles.gallery}>
      {information.map((item, index) => (
        <div key={index} className={styles.galleryItem}>
          <div>
            <img src={item.img} alt={item.title} className={styles.image} />
          </div>
          <div className={styles.overlay}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </article>
  )
}

export default PageGalery
