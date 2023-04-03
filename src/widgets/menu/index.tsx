import { useState } from 'react'
import { motion } from 'framer-motion'
import { Stack } from '../../shared/ui/stack'

interface IMenu {
  children: JSX.Element
}

export default function AnimatedMenu({ children }: IMenu) {
  const [timerEnterId, setTimerEnterId] = useState<number>()
  const [timerLeaveId, setTimerLeaveId] = useState<number>()

  const handleMouseEnter = () => {
    setTimerLeaveId(
      setTimeout(
        () => dispatch(toggleIsFullWidth(true)),
        600
      )
    )
    clearTimeout(timerEnterId)
  }

  const handleMouseLeave = () => {
    setTimerEnterId(
      setTimeout(
        () => dispatch(toggleIsFullWidth(false)),
        300
      )
    )
    clearTimeout(timerLeaveId)
  }

  return <Stack component={motion.div}>{children}</Stack>
}
