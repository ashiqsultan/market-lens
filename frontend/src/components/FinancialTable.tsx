import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const roundToMillions = (value) => {
  return (value / 1000000).toFixed(2);
};

const FinancialTable = ({ financialData }) => {
  if (!financialData || financialData.length === 0) {
    return <div>No data available</div>;
  }

  const years = financialData.map((data) => data.fiscal_year);

  const financialKeys = {
    'Total Assets': 'balance_sheet.assets.value',
    'Total Liabilities': 'balance_sheet.liabilities.value',
    Equity: 'balance_sheet.equity.value',
    'Current Assets': 'balance_sheet.current_assets.value',
    'Current Liabilities': 'balance_sheet.current_liabilities.value',
    Revenue: 'income_statement.revenues.value',
    'Operating Income/Loss': 'income_statement.operating_income_loss.value',
    'Operating Expenses': 'income_statement.operating_expenses.value',
    'Net Cash Flow':
      'cash_flow_statement.net_cash_flow_from_operating_activities.value',
    'Net Income/Loss': 'income_statement.net_income_loss.value',
    'Gross Profit': 'income_statement.gross_profit.value',
  };

  // @ts-ignore
  const evalValue = (data, key) => {
    try {
      const val = eval(`data.financials.${financialKeys[key]}`);
      return val;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            {years.map((year) => (
              <TableCell key={year}>{year}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(financialKeys).map((key, index) => (
            <TableRow key={index}>
              <TableCell>{key}</TableCell>
              {financialData.map((data, dataIndex) => (
                <TableCell key={dataIndex}>
                  {roundToMillions(evalValue(data, key))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FinancialTable;
