import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import AlertLimit from './AlertLimit';

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
const PriceChart = ({ priceRes }) => {
  if (priceRes.status === 429) {
    return <AlertLimit resourceName={'Price Data'} />;
  } else if (Array.isArray(priceRes.results)) {
    const data = {
      labels: priceRes.results.map((i) => {
        return new Date(i.t).toISOString().slice(0, 10);
      }),
      datasets: [
        {
          label: 'Price in Dollars',
          data: priceRes.results.map((i) => i.vw),
          borderColor: '#00b386',
          borderWidth: 2,
          tension: 0.1,
          pointHoverRadius: 20,
        },
      ],
    };
    ChartJS.register(LinearScale, CategoryScale, TimeScale);
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
};

export default PriceChart;
