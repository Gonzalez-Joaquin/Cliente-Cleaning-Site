import { onAuthStateChanged } from 'firebase/auth'
import { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { updateUser, resetUser } from '../Store/Reducers/user.reducer'
import { auth } from '../firebase'
import { useAppDispatch, useAppSelector } from '../Hooks/useRedux'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Page = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'))

function RoutesWithNotFound({ children }: Props) {
  const userSelected = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (userSelected) {
        if (user) {
          dispatch(updateUser({ name: user.displayName || user.email }))
        } else {
          dispatch(resetUser())
        }
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <Routes>
      {children}
      <Route path="*" element={<Page />} />
    </Routes>
  )
}
export default RoutesWithNotFound
