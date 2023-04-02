import { Button, RouterLink } from '../../shared'

interface HomeButtonProps {
  isReloadPage?: boolean
}

const HomeButtonPage = ({
  isReloadPage = false,
}: HomeButtonProps) => (
  <Button
    component={RouterLink}
    to="/"
    reloadDocument={isReloadPage}
  >
    На главную
  </Button>
)

export default HomeButtonPage
