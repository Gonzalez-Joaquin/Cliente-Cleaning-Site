import style from './loadingPage.module.css'

const Loading = () => {
  return (
    <section className={style.container}>
      <h2>La página esta cargando</h2>
      <div className={style['dots-container']}>
        <div className={style.dots}></div>
        <div className={style.dots}></div>
        <div className={style.dots}></div>
        <div className={style.dots}></div>
        <div className={style.dots}></div>
      </div>
    </section>
  )
}

export default Loading
