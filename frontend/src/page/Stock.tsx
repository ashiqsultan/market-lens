import { useParams } from 'react-router-dom';
import AboutStock from '../components/AboutStock';
import Financial from '../components/Financial';
import NetIncomeChart from '../components/NetIncomeChart';
import { Typography, Box } from '@mui/material';
import PriceChart from '../components/PriceChart';
import NewsList from '../components/NewsList';
import MainSearch from '../components/MainSearch';

const StockDetails = () => {
  const params = useParams();
  const symbol = params.symbol || '';

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h5'>Money Lens</Typography>
        <MainSearch />
      </Box>
      <AboutStock />
      <Box display={'flex'} columnGap={"2rem"}>
        <Box>
          <PriceChart />
          <Typography variant='h5'>Revenue vs Net Income</Typography>
          <Typography variant='caption'>(in millions USD)</Typography>
          <NetIncomeChart />
          <Financial />
        </Box>
        <Box>
          <Typography variant='h6'>News Related to {symbol}</Typography>
          <NewsList />
        </Box>
      </Box>
    </>
  );
};

export default StockDetails;
