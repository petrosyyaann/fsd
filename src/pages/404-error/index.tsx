import { Flex } from '@mantine/core'
import { Text, Title } from '../../shared/ui'
import { NavigateToHomeButton } from '../../features'

const Error404Page = () => (
  <Flex
    h="100vh"
    justify="center"
    align="center"
    direction="column"
    gap="24px"
  >
    <Title color="blue.5">Ошибка 404</Title>
    <Text color="gray.5" align="center">
      Страница которую вы пытаетесь открыть не существует,
      <br />
      наши разработчики будут оповещены об этой проблеме и
      примут меры для ее устранения.
    </Text>
    <NavigateToHomeButton />
  </Flex>
)

export default Error404Page
