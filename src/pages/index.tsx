import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const TestPage = lazy(() => import('./test'))

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  )
}
