import style from './loadingPage.module.css'

const Loading = () => {
  return (
    <section className={style.container}>
      <h2>La página esta cargando...</h2>
      <div className={style.content}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default Loading
