import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Financial from '../components/Financial';
import { Typography, Box, Backdrop, CircularProgress } from '@mui/material';
import PriceLayout from '../components/PriceLayout';
import NewsList from '../components/NewsList';
import MainSearch from '../components/MainSearch';
import { useEffect } from 'react';
import { getStockData } from '../api';

const StockDetails = () => {
  const params = useParams();
  const symbol = params.symbol || '';

  const [newsRes, setNewsRes] = useState([]);
  const [priceRes, setPriceRes] = useState([]);
  const [financialRes, setFinancialRes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async (symbol) => {
      setIsLoading(true);
      const data = await getStockData(symbol);
      if (data.news) {
        setNewsRes(data.news);
      }
      if (data.price) {
        setPriceRes(data.price);
      }
      if (data.financial) {
        setFinancialRes(data.financial);
      }
      setIsLoading(false);
    };

    getData(symbol);
  }, [symbol]);

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h5'>Money Lens</Typography>
        <MainSearch />
      </Box>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color='primary' />
      </Backdrop>

      <Box display={'flex'} columnGap={'3rem'} marginTop={'1rem'}>
        <Box>
          <PriceLayout
            priceRes={priceRes}
            financialRes={financialRes}
            symbol={symbol}
          />
          <Typography variant='h5'>Revenue vs Net Income</Typography>
          <Typography variant='caption'>(in millions USD)</Typography>
          <Financial financialRes={financialRes} />
        </Box>
        <Box>
          <Typography
            variant='h6'
            sx={{
              marginBottom: '0.4rem',
            }}
          >
            News related to {symbol}
          </Typography>
          <NewsList newsRes={newsRes} />
        </Box>
      </Box>
    </>
  );
};

export default StockDetails;
