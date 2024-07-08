import { useEffect } from 'react'

import { NavigationPads, SearchBar, TableWizzard } from '../../Components'
import { DashboardContextProvider } from '../../Context/DashboardContext'
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux'
import { getServices } from '../../Store/Thunks/service.thunks'
import { getMessages } from '../../Store/Thunks/message.thunks'
import style from './dashboardPage.module.css'
import { useToast } from '../../Context/ToastContext'

const DashboardPage = () => {
  const { listOfServices } = useAppSelector(state => state.services)
  const { listOfMessages } = useAppSelector(state => state.messages)
  const dispatch = useAppDispatch()
  const { showToast } = useToast()

  useEffect(() => {
    if (!listOfServices || listOfServices?.length === 0) {
      dispatch(getServices(showToast))
    }

    if (!listOfMessages || listOfMessages?.length === 0) {
      dispatch(getMessages())
    }
  }, [])

  return (
    <DashboardContextProvider>
      <section className={style.section}>
        <article className={style.article}>
          <NavigationPads />
          <SearchBar />
          <TableWizzard />
        </article>
      </section>
    </DashboardContextProvider>
  )
}

export default DashboardPage
