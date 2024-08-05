import { Element } from 'react-scroll'

import { HomeModel } from '../../../../Models/routes.models'
import style from './About.module.css'
import { useAppSelector } from '../../../../Hooks/useRedux'
import { memo } from 'react'

const About = () => {
  const ListOfTools = useAppSelector(store => store.tools)

  return (
    <Element className={style.element} name={HomeModel.ABOUT}>
      <section className={style.section}>
        <article className={style.article}>
          <h2>Nuestras herramientas</h2>
          <div className={style.toolsContainer}>
            {ListOfTools.map(tool => (
              <div key={tool.id} className={style.toolCard}>
                <div className={style.imageContainer} style={{ backgroundImage: `url(${tool.img})` }}></div>
                <div className={style.infoContainer}>
                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </Element>
  )
}

export default memo(About)
