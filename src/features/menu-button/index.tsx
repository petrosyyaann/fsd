import { Button } from '../../shared'

interface IMenuButton {
  label: string
  icon: JSX.Element
  isActive?: boolean
  onClick: () => void
}

function MenuButton({
  icon,
  label,
  onClick,
  isActive = false,
}: IMenuButton) {
  return (
    <Button
      borderRadius="10px"
      rightIcon={icon}
      onClick={onClick}
      bgColor={isActive ? '#339AF0' : 'transparent'}
    >
      {label}
    </Button>
  )
}
