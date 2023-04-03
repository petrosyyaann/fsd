import { Button } from '../../shared/ui'
import { RouterLink } from '../../shared/lib'

interface NavigateToHomeButtonProps {
  isReloadPage?: boolean
}

const NavigateToHomeButton = ({
  isReloadPage = false,
}: NavigateToHomeButtonProps) => (
  <Button
    component={RouterLink}
    to="/"
    reloadDocument={isReloadPage}
  >
    На главную
  </Button>
)

export default NavigateToHomeButton
