import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Page = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'))

function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Page />} />
    </Routes>
  )
}
export default RoutesWithNotFound
