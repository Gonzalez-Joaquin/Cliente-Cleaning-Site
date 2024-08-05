import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { Element, scroller } from 'react-scroll'
import { useState, useEffect, memo } from 'react'

import picturebg from '../../../../Assets/Backgrounds/bg-primary.jpg'
import { HomeModel } from '../../../../Models/routes.models'
import Loading from '../../../LoadingPage/LoadingPage'
import { Button } from '../../../../Components'
import style from './home.module.css'

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [videoUrl, setVideoUrl] = useState<string>('')

  useEffect(() => {
    const storage = getStorage()
    const videoRef = ref(
      storage,
      'gs://gblimpiezadetapizados.appspot.com/close-up-of-vacuum-cleaner-cleaning-leather-sofa-2024-03-28-01-08-37-utc.mov'
    )
    getDownloadURL(videoRef)
      .then(url => setVideoUrl(url))
      .catch(error => console.error('Error getting video URL: ', error))
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 300)
      })
  }, [])

  const handleClick = (link: string) => {
    window.open(link, '_blank')
  }

  return loading ? (
    <Loading />
  ) : (
    <Element className={style.element} name={HomeModel.HOME}>
      <section className={style.section}>
        {videoUrl ? (
          <video className={style.background} autoPlay loop muted>
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
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

export default memo(Home)
