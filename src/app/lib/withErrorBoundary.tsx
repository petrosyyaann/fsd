import { ErrorBoundary } from 'react-error-boundary'
import ReactErrorPage from '../../pages/react-error'

// TODO: Нужно повесить Sentry!!!

const withRouter = (component: () => JSX.Element) => () =>
  (
    <ErrorBoundary fallback={<ReactErrorPage />}>
      {component()}
    </ErrorBoundary>
  )

export default withRouter
