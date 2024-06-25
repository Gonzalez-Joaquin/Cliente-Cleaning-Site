import { DashboardContextProvider } from '../../Context/DashboardContext'
import { SearchBar, ServicesTable } from '../../Components'

import style from './dashboardPage.module.css'
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux'
import { useEffect } from 'react'
import { getServices } from '../../Store/Thunks/service.thunks'

const DashboardPage = () => {
  const { listOfServices } = useAppSelector(state => state.services)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!listOfServices || listOfServices?.length === 0) {
      dispatch(getServices())
    }
  }, [])

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
