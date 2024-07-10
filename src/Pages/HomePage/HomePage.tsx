import { useEffect } from 'react'

import { Home, Services, Jobs, About, Contact } from './Layout'
import { getServices } from '../../Store/Thunks/service.thunks'
import { useToast } from '../../Context/ToastContext'
import { useAppDispatch } from '../../Hooks/useRedux'
import style from './homePage.module.css'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { showToast } = useToast()

  useEffect(() => {
    dispatch(getServices(showToast))
  }, [dispatch])

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
