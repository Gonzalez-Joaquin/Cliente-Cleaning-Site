import { Element } from 'react-scroll'

import { HomeModel } from '../../../../Models/routes.models'

import style from './jobs.module.css'
import { useAppSelector } from '../../../../Hooks/useRedux'

const Jobs = () => {
  const ListOfJobs = useAppSelector(store => store.jobs)

  return (
    <Element className={style.element} name={HomeModel.JOBS}>
      <section className={style.section}>
        <article className={style.article}>
          <h2>TIpos de trabajos</h2>
          <div className={style.container}>
            {ListOfJobs.map(item => (
              <div className={style.item} key={item.id}>
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
