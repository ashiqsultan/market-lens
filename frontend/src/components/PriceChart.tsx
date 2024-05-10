import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import tempPriceData from './tempPriceData';

const data = {
  labels: tempPriceData.map((i) => {
    // Function to convert unix timestamp to yyyy-mm-dd format
    return new Date(i.t).toISOString().slice(0, 10);
  }),
  datasets: [
    {
      label: 'Price in Dollars',
      data: tempPriceData.map((i) => i.vw),
      borderColor: '#00b386',
      borderWidth: 2,
      tension: 0.1,
      pointHoverRadius: 20,
    },
  ],
};
const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Price',
      },
      grid: {
        display: false,
      },
    },
  },
};
const PriceChart = () => {
  ChartJS.register(LinearScale, CategoryScale, TimeScale);
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceChart;
