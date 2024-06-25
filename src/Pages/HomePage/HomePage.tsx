import { useEffect } from 'react'
import { Home, Services, Jobs, About, Contact } from './Layout'
import style from './homePage.module.css'
import { useAppDispatch } from '../../Hooks/useRedux'
import { getServices } from '../../Store/Thunks/service.thunks'

const HomePage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getServices())
  }, [])

  return (
    <main className={style.main}>
      <Home />
      <Jobs />
      <Services />
      <About />
      <Contact />
    </main>
  )
}

export default HomePage
