import style from './notFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <section className={style.section}>
      <article className={style.article}>
        <div className={style.container}>
          <h3>Página no encontrada</h3>
          <p>Vuelva para continuar</p>
        </div>
        <div className={style.content}>
          <span>4</span>
          <i className={`fi fi-br-vacuum-robot ${style.animate}`}></i>
          <span>4</span>
        </div>
      </article>
    </section>
  )
}

export default NotFoundPage
