import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Box } from '@mui/material';

const roundToMillions = (value) => {
  return (value / 1000000).toFixed(2);
};

const NetIncomeChart = () => {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );
  const netIncomeData = [
    {
      value: 9.6995e10,
      unit: 'USD',
      label: 'Net Income/Loss',
      order: 3200,
    },
    {
      value: 9.9803e10,
      unit: 'USD',
      label: 'Net Income/Loss',
      order: 3200,
    },
    { value: 9.468e10, unit: 'USD', label: 'Net Income/Loss', order: 3200 },
  ];
  const revenueData = [
    {
      value: 3.83285e11,
      unit: 'USD',
      label: 'Revenues',
      order: 100,
    },
    {
      value: 3.94328e11,
      unit: 'USD',
      label: 'Revenues',
      order: 100,
    },
    {
      value: 3.65817e11,
      unit: 'USD',
      label: 'Revenues',
      order: 100,
    },
  ];

  return (
    <Box width={'60vw'} height={'400px'}>
      <Chart
        type='bar'
        data={{
          labels: ['2023', '2022', '2021'],
          datasets: [
            {
              label: 'Revenue',
              data: revenueData.map((i) => roundToMillions(i.value)),
              backgroundColor: '#00b386',
              borderColor: '#00b386',
              borderWidth: 1,
              barThickness: 50,
            },
            {
              label: 'Net Income ',
              data: netIncomeData.map((i) => roundToMillions(i.value)),
              backgroundColor: '#5367FF',
              borderColor: '#5367FF',
              borderWidth: 1,
              barThickness: 50,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default NetIncomeChart;
