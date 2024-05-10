import { useParams } from 'react-router-dom';
import AboutStock from '../components/AboutStock';
import Financial from '../components/Financial';
import NetIncomeChart from '../components/NetIncomeChart';
import { Typography } from '@mui/material';

const StockDetails = () => {
  const params = useParams();
  const symbol = params.symbol || '';

  return (
    <>
      <AboutStock />
      <Typography variant='h5'>Revenue vs Net Income</Typography>
      <Typography variant='caption'>(in millions USD)</Typography>
      <NetIncomeChart />
      <Financial />
    </>
  );
};

export default StockDetails;
