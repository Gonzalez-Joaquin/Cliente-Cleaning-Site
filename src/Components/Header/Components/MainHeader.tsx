import { useNavigate } from 'react-router-dom'
import { Link, scroller } from 'react-scroll'
import { useState, useEffect } from 'react'

import RoutesModel, { HomeKeys, HomeModel } from '../../../Models/routes.models'
import { useAppSelector, useAppDispatch } from '../../../Hooks/useRedux'
import { resetUser } from '../../../Store/Reducers/user.reducer'
import style from '../header.module.css'

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const user = useAppSelector(state => state.user)
  const [scrolled, setScrolled] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${style.header} ${scrolled ? style.scrolled : ''}`}>
      <div className={style.headerContainer}>
        <div className={style.burgerContainer} onClick={() => setIsOpen(!isOpen)}>
          <i
            className={`fi fi-br-${!isOpen ? 'menu-burger' : 'cross'} ${!isOpen ? style.iconClose : style.iconOpen}`}
          />
        </div>
        <nav className={`${style.nav} ${isOpen ? style.navOpen : ' '}`}>
          <ul className={style.ul}>
            {Object.keys(HomeModel).map((item, idx) => (
              <li className={style.li} key={idx}>
                <Link
                  onClick={() => {
                    scroller.scrollTo(item, {})
                    setIsOpen(false)
                  }}
                  className={style.link}
                  activeClass={style.active}
                  to={HomeModel[item as HomeKeys]}
                  spy={true}
                  duration={100}>
                  {HomeModel[item as HomeKeys]}
                </Link>
              </li>
            ))}
            {user.name !== '' ? (
              <>
                <li className={style.li}>
                  <a className={style.link} onClick={() => navigate(`/${RoutesModel.DASHBOARD}`)}>
                    Panel Administrativo
                  </a>
                </li>
                <li className={style.liClose}>
                  <a
                    className={style.link}
                    onClick={() => {
                      dispatch(resetUser())
                      setIsOpen(false)
                    }}>
                    <span>Salir</span>
                    <i className={'fi fi-br-exit'} />
                  </a>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainHeader
