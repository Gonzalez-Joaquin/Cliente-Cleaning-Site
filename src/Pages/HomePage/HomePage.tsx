import React, { Suspense, useEffect } from 'react'
import { getServices } from '../../Store/Thunks/service.thunks'
import { useToast } from '../../Context/ToastContext'
import { useAppDispatch } from '../../Hooks/useRedux'
import style from './homePage.module.css'

const Home = React.lazy(() => import('./Layout/Home/Home'))
const Services = React.lazy(() => import('./Layout/Services/Services'))
const Jobs = React.lazy(() => import('./Layout/Jobs/Jobs'))
const About = React.lazy(() => import('./Layout/About/About'))
const Contact = React.lazy(() => import('./Layout/Contact/Contact'))

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { showToast } = useToast()

  useEffect(() => {
    dispatch(getServices(showToast))
  }, [dispatch])

  return (
    <main className={style.main}>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <Jobs />
        <Services />
        <About />
        <Contact />
      </Suspense>
    </main>
  )
}

export default HomePage
