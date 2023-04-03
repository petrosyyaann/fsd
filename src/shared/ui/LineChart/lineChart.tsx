import { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { baseTooltip } from '../../config/chartJSInitialization'

export const options: ChartOptions<'line'> = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 100,
      border: {
        dash: [2, 2],
      },
      grid: {
        drawTicks: false,
        color: '#E9ECEF',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Звонки',
    },
    legend: {
      display: false,
    },
    tooltip: { ...baseTooltip, intersect: false },
  },
  responsive: true,
  elements: {
    line: {
      borderWidth: 3,
      tension: 0.4,
    },
    point: {
      pointStyle: false,
    },
  },
}

const labels = [...Array(30).keys()].map((elem) =>
  String(elem)
)

export const data = {
  labels,
  datasets: [
    {
      backgroundColor: '#339AF0',
      borderColor: '#339AF0',
      data: labels.map(() => Math.random() * 100),
      label: 'Dataset 1',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 100),
      borderColor: '#FFE3E3',
      backgroundColor: '#FFE3E3',
    },
  ],
}

export const LineChart = () => (
  <Line options={options} data={data} />
)
