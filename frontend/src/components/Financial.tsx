import { Typography } from '@mui/material';
import FinancialTable from './FinancialTable';
import tempFinancials from './tempFinancials';

const Financial = () => {
  const financialData = tempFinancials;
  return (
    <>
      <Typography variant='h5' gutterBottom>
        Company Financial
      </Typography>
      <Typography variant='caption' gutterBottom>
        All values in USD millions
      </Typography>
      <FinancialTable financialData={financialData} />
    </>
  );
};
export default Financial;
