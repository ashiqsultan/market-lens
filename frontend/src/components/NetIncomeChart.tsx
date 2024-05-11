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

const NetIncomeChart = ({ netIncomeData, revenueData }) => {
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
              backgroundColor: '#00A37A',
              borderColor: '#00A37A',
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
