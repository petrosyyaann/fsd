import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const ReactError = lazy(() => import('./react-error'))
const TestPage = lazy(() => import('./test'))
const TestErrorPage = lazy(() => import('./test-error'))

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/error" element={<TestErrorPage />} />
    </Routes>
  )
}

export { ReactError, LoadingPage }
