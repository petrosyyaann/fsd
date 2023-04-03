import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  TooltipOptions,
  PointElement,
} from 'chart.js'
import { _DeepPartialObject } from 'chart.js/dist/types/utils'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

ChartJS.defaults.color = '#868E96'

export const baseTooltip: _DeepPartialObject<
  TooltipOptions<'bar' | 'line'>
> = {
  backgroundColor: '#FFFFFF',
  borderColor: '#CED4DA',
  borderWidth: 0.28,
  titleColor: 'black',
  bodyColor: 'black',
  titleFont: { weight: 'lighter' },
  bodyFont: { weight: 'lighter' },
}
