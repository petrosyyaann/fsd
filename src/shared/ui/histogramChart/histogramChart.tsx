import { ChartOptions, ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { baseTooltip } from '../../config/chartJSInitialization'

export const options: ChartOptions<'bar'> = {
  plugins: {
    tooltip: { ...baseTooltip, usePointStyle: true },
    legend: {
      position: 'bottom',
      align: 'start',
      labels: {
        usePointStyle: true,
        color: 'black',
        font: {
          size: 12,
        },
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        color: 'white',
      },
    },
    y: {
      stacked: true,
      grid: {
        color: 'white',
      },
      display: false,
    },
  },
}

const labels = Array.from({ length: 30 }, (_, i) => i + 1)

export const data: ChartData<'bar', number[], number> = {
  labels,
  datasets: [
    {
      label: 'принятые звонки',
      data: labels.map(() => Math.random() * 100),
      backgroundColor: '#339AF0',
      borderRadius: 25,
    },
    {
      label: 'пропущенные звонки',
      data: labels.map(() => Math.random() * 100),
      backgroundColor: '#FF6B6B',
      borderRadius: 25,
    },
  ],
}

export function Histogram() {
  return <Bar options={options} data={data} />
}
