import { useEffect, useState } from 'react';
import AlertLimit from './AlertLimit';
import BasicInfo from './BacisInfo';
import PriceChart from './PriceChart';
import { Box, Chip } from '@mui/material';

const PriceLayout = ({ priceRes, financialRes, symbol }) => {
  const [chartData, setChartData] = useState(priceRes.results);
  const [selectedOption, setSelectedOption] = useState('Month');

  const handleYearlyData = () => {
    setChartData(priceRes.results);
    setSelectedOption('Year');
  };

  const handleMonthlyData = () => {
    const last30Days = priceRes.results.slice(-30);
    setChartData(last30Days);
    setSelectedOption('Month');
  };

  const handleWeeklyData = () => {
    const lastWeek = priceRes.results.slice(-7);
    setChartData(lastWeek);
    setSelectedOption('Week');
  };

  useEffect(() => {
    if (Array.isArray(priceRes.results)) {
      handleMonthlyData();
    }
  }, [priceRes.results]);

  if (priceRes.status === 429 || financialRes.status === 429) {
    return <AlertLimit resourceName={'Price Data'} />;
  }
  if (
    Array.isArray(financialRes.results) &&
    financialRes.results[0]?.company_name
  ) {
    const companyName = financialRes.results[0]?.company_name;
    if (Array.isArray(priceRes.results)) {
      const lastPriceObj = priceRes.results[priceRes.results.length - 1];
      const closingPrice = lastPriceObj.vw;
      const date = new Date(lastPriceObj.t).toISOString().slice(0, 10);
      return (
        <>
          <BasicInfo
            name={`${companyName} (${symbol})`}
            lastClosePrice={closingPrice}
            date={date}
          />
          <Box paddingBlock={'1rem'}>
            <Chip
              label='Year'
              onClick={handleYearlyData}
              variant={selectedOption === 'Year' ? 'filled' : 'outlined'}
              color='primary'
              style={{ margin: '4px' }}
            />
            <Chip
              label='Month'
              onClick={handleMonthlyData}
              variant={selectedOption === 'Month' ? 'filled' : 'outlined'}
              color='primary'
              style={{ margin: '4px' }}
            />
            <Chip
              label='Week'
              onClick={handleWeeklyData}
              variant={selectedOption === 'Week' ? 'filled' : 'outlined'}
              color='primary'
              style={{ margin: '4px' }}
            />
          </Box>
          <PriceChart priceResults={chartData} />
        </>
      );
    }
  }
  return <></>;
};
export default PriceLayout;
