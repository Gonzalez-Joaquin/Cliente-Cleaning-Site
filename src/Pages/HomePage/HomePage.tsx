import { Home, Services, Jobs, About, Contact } from './Layout'
import style from './homePage.module.css'

const HomePage = () => {
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
