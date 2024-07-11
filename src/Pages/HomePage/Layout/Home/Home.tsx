import { Element, scroller } from 'react-scroll'
import { useEffect, useState } from 'react'

import { useWindowSize } from '../../../../Hooks/useWindowSize'
import { HomeModel } from '../../../../Models/routes.models'
import { Button } from '../../../../Components'
import style from './home.module.css'

import picturebg from '../../../../Assets/Backgrounds/bg-primary.jpg'

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [width] = useWindowSize()

  useEffect(() => {
    if (width < 1025) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  const handleClick = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <Element className={style.element} name={HomeModel.HOME}>
      <section className={style.section}>
        {isMobile ? (
          <div
            className={style.background}
            style={{
              backgroundImage: `url(${picturebg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          />
        ) : (
          <video
            className={style.background}
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}>
            <source src={'https://youtu.be/LabGEhywHU0'} type="video/mp4" />
          </video>
        )}
        <article className={style.article}>
          <h1>Limpieza De Tapizados</h1>
          <p>
            Renovamos y dejamos impecable todo tipo de tapizados, quitando manchas, ácaros, olores y suciedad.
            Eliminando hasta la última mancha y partícula de polvo.
          </p>
          <Button
            value="Servicios"
            styles="default"
            icon="info"
            onClick={() => scroller.scrollTo(HomeModel.SERVICES, {})}
          />
        </article>
        <div className={style.downContainer}>
          <Button icon="angle-down" styles="default" onClick={() => scroller.scrollTo(HomeModel.JOBS, {})} />
        </div>
        <ul className={style.wrapper}>
          <li
            className={style.icon}
            onClick={() => handleClick('https://www.facebook.com/profile.php?id=61560946685046')}>
            <span className={style.tooltip}>Facebook</span>
            <span>
              <i className="fi fi-brands-facebook"></i>
            </span>
          </li>
          <li className={style.icon} onClick={() => handleClick('https://www.instagram.com/gbcleaningsite/')}>
            <span className={style.tooltip}>Instagram</span>
            <span>
              <i className="fi fi-brands-instagram"></i>
            </span>
          </li>
          <li className={style.icon} onClick={() => handleClick('https://wa.me/5492233042204')}>
            <span className={style.tooltip}>Whatsapp</span>
            <span>
              <i className="fi fi-brands-whatsapp"></i>
            </span>
          </li>
        </ul>
      </section>
    </Element>
  )
}

export default Home
