import { DashboardContextProvider } from '../../Context/DashboardContext'
import { SearchBar, ServicesTable } from '../../Components'

import style from './dashboardPage.module.css'

const DashboardPage = () => {
  return (
    <DashboardContextProvider>
      <section className={style.section}>
        <article className={style.article}>
          <SearchBar />
          <ServicesTable />
        </article>
      </section>
    </DashboardContextProvider>
  )
}

export default DashboardPage
