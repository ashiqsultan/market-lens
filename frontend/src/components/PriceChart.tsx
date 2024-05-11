import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const options = {
  interaction: {
    intersect: false,
    mode: 'index',
  },
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
const PriceChart = ({ priceResults }) => {
  if (Array.isArray(priceResults)) {
    const data = {
      labels: priceResults.map((i) => {
        return new Date(i.t).toISOString().slice(0, 10);
      }),
      datasets: [
        {
          label: 'Price in Dollars',
          data: priceResults.map((i) => i.vw),
          borderColor: '#00A37A',
          borderWidth: 2,
          tension: 0.1,
          pointHoverRadius: 20,
        },
      ],
    };
    ChartJS.register(LinearScale, CategoryScale, TimeScale);
    return (
      <div>
        {/* @ts-ignore */}
        <Line data={data} options={options} />
      </div>
    );
  } else return <></>;
};

export default PriceChart;
