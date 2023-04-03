import { Stack } from '@mantine/core'
import { RouterLink } from '../../shared'

const TestPage = () => (
  <Stack>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/ljhgfdfghjk">Страница 404</RouterLink>
    <RouterLink to="/error">Страница с ошибкой</RouterLink>
    <div>Looo</div>
  </Stack>
)

export default TestPage
