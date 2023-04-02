import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingPage } from '../../pages'

const withRouter = (component: () => JSX.Element) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        {component()}
      </Suspense>
    </BrowserRouter>
  )

export default withRouter
