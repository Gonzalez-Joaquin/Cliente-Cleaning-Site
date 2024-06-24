import { Element } from 'react-scroll'
import { HomeModel } from '../../../../Models/routes.models'
import style from './jobs.module.css'
import { useAppSelector } from '../../../../Hooks/useRedux'
import { useEffect, useState } from 'react'

const Jobs = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const ListOfJobs = useAppSelector(store => store.jobs)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % ListOfJobs.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <Element className={style.element} name={HomeModel.JOBS}>
      <section className={style.section}>
        <article className={style.article}>
          <h2>Tipos de trabajos</h2>
          <div className={style.container} onMouseDown={() => setIsPaused(true)} onMouseUp={() => setIsPaused(false)}>
            {ListOfJobs.map((item, index) => (
              <div
                className={`${style.item} ${index === currentIndex ? style.active : ''}`}
                key={item.id}
                style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
                <div className={style.img} style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className={style.content}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </Element>
  )
}

export default Jobs
