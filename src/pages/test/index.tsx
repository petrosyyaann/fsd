import { Stack } from '@mantine/core'
import { RouterLink } from '../../shared/lib'
import { Histogram, LineChart } from '../../shared/ui'

const TestPage = () => (
  <Stack>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/ljhgfdfghjk">Страница 404</RouterLink>
    <RouterLink to="/error">Страница с ошибкой</RouterLink>
    <Histogram />
    <LineChart />
    <div>Looo</div>
  </Stack>
)

export default TestPage
