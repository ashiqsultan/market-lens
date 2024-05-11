import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Financial from '../components/Financial';
import { Typography, Box } from '@mui/material';
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

  useEffect(() => {
    const getData = async (symbol) => {
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
    };

    getData(symbol);
  }, [symbol]);

  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant='h5'>Money Lens</Typography>
        <MainSearch />
      </Box>
      {/* <AboutStock /> */}
      <Box display={'flex'} columnGap={'2rem'}>
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
          <Typography variant='h6'>News Related to {symbol}</Typography>
          <NewsList newsRes={newsRes} />
        </Box>
      </Box>
    </>
  );
};

export default StockDetails;
