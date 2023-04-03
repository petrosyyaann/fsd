import compose from 'compose-function'
import withRouter from './withRouter'
import withErrorBoundary from './withErrorBoundary'

export const withHocs = compose(
  withRouter,
  withErrorBoundary
)
