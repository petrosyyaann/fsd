import { Flex } from '@mantine/core'
import { Text, Title } from '../../shared/ui'
import { NavigateToHomeButton } from '../../features'

const ReactErrorPage = () => (
  <Flex
    h="100vh"
    justify="center"
    align="center"
    direction="column"
    gap="24px"
  >
    <Title color="blue.5">
      Ууупс! Что-то пошло не так...
    </Title>
    <Text color="gray.5" align="center">
      Наши команда уже в курсе случившейся проблемы и мы
      прилагаем
      <br /> все усилия, чтобы решить ее в ближайшее время,
      спасибо за ваше терпение!
    </Text>
    <NavigateToHomeButton isReloadPage />
  </Flex>
)

export default ReactErrorPage
