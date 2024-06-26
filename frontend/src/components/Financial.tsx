import { Box, Typography } from '@mui/material';
import FinancialTable from './FinancialTable';
import AlertLimit from './AlertLimit';
import NetIncomeChart from './NetIncomeChart';

const Financial = ({ financialRes }) => {
  if (financialRes.status === 429) {
    return <AlertLimit resourceName={'Financial Data'} />;
  } else if (Array.isArray(financialRes.results)) {
    const netIncomeData: any[] = [];
    const revenueData: any[] = [];
    const years: any[] = [];

    financialRes.results.forEach((item) => {
      if (item.financials.income_statement.net_income_loss) {
        netIncomeData.push(item.financials.income_statement.net_income_loss);
      }
      if (item.financials.income_statement.revenues) {
        revenueData.push(item.financials.income_statement.revenues);
      }
      if (item.fiscal_year) {
        years.push(item.fiscal_year);
      }
    });

    return (
      <>
        <Box marginTop={'2rem'}>
          <Typography variant='h5'>Revenue vs Net Income</Typography>
          <Typography variant='caption'>(in millions USD)</Typography>
        </Box>
        <Box marginBlock={'0.5rem'}>
          <NetIncomeChart
            // @ts-ignore
            netIncomeData={netIncomeData.toReversed()}
            // @ts-ignore
            revenueData={revenueData.toReversed()}
            // @ts-ignore
            years={years.toReversed()}
          />
        </Box>
        <Box marginTop={'2rem'}>
          <Typography variant='h5'>Company Financial</Typography>
          <Typography variant='caption' gutterBottom>
            All values in USD millions
          </Typography>
        </Box>
        <Box marginBlock={'0.5rem'}>
          <FinancialTable financialData={financialRes.results.toReversed()} />
        </Box>
      </>
    );
  }
};
export default Financial;
