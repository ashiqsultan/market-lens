import { Typography } from '@mui/material';
import FinancialTable from './FinancialTable';
import AlertLimit from './AlertLimit';
import NetIncomeChart from './NetIncomeChart';

const Financial = ({ financialRes }) => {
  if (financialRes.status === 429) {
    return <AlertLimit resourceName={'Financial Data'} />;
  } else if (Array.isArray(financialRes.results)) {
    const netIncomeData: any[] = [];
    const revenueData: any[] = [];

    financialRes.results.forEach((item) => {
      if (item.financials.income_statement.net_income_loss) {
        netIncomeData.push(item.financials.income_statement.net_income_loss);
      }
      if (item.financials.income_statement.revenues) {
        revenueData.push(item.financials.income_statement.revenues);
      }
    });

    return (
      <>
        <NetIncomeChart
          netIncomeData={netIncomeData}
          revenueData={revenueData}
        />
        <Typography variant='h5' gutterBottom>
          Company Financial
        </Typography>
        <Typography variant='caption' gutterBottom>
          All values in USD millions
        </Typography>
        <FinancialTable financialData={financialRes.results} />
      </>
    );
  }
};
export default Financial;
