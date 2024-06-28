import { useNavigate } from 'react-router-dom'
import { Link, scroller } from 'react-scroll'
import { useState, useEffect } from 'react'

import Routes, { HomeKeys, HomeModel } from '../../Models/routes.models'
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux'
import { resetUser } from '../../Store/Reducers/user.reducer'
import RoutesModel from '../../Models/routes.models'
import style from './header.module.css'
import { Button } from '..'

const Header = () => {
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

  return location.pathname.includes(Routes.SOCIAL) ||
    location.pathname.includes(Routes.LOGIN) ? null : location.pathname.includes(Routes.HOME) ? (
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
              <li className={style.li}>
                <a className={style.link} onClick={() => navigate(`/${RoutesModel.DASHBOARD}`)}>
                  Panel Administrativo
                </a>
              </li>
            ) : null}
            {user.name !== '' ? (
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
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  ) : location.pathname.includes(RoutesModel.DASHBOARD) ? (
    <header className={style.appHeader}>
      <button className={style.button} onClick={() => navigate(RoutesModel.HOME)}>
        <i className="fi fi-br-angle-left" />
      </button>
      <div className={style.content}>
        <h3 className={style.title}>Panel Administrativo</h3>
        <Button
          value={'Salir'}
          type="button"
          styles="default"
          icon="exit"
          onClick={() => {
            dispatch(resetUser())
          }}
        />
      </div>
    </header>
  ) : !location.pathname.includes(RoutesModel.SOCIAL) ? (
    <header className={style.appHeader}>
      <button
        className={style.button}
        onClick={() =>
          navigate(location.pathname.includes(RoutesModel.CREATE) ? RoutesModel.DASHBOARD : RoutesModel.HOME)
        }>
        <i className="fi fi-br-angle-left" />
      </button>
      <div className={style.content}>
        <h3 className={style.title}>
          {location.pathname.includes(Routes.SERVICES)
            ? 'Servicios'
            : location.pathname.includes(RoutesModel.CREATE)
            ? 'Crear Servicio'
            : null}
        </h3>
        {user.name !== '' ? (
          <Button
            value={'Salir'}
            type="button"
            styles="default"
            icon="exit"
            onClick={() => {
              dispatch(resetUser())
            }}
          />
        ) : null}
      </div>
    </header>
  ) : null
}

export default Header
