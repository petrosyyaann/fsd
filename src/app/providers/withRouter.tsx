import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

const withRouter = (component: () => JSX.Element) => () =>
  (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        {component()}
      </Suspense>
    </BrowserRouter>
  )

export default withRouter
