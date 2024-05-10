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
    // 'Fixed Assets': 'balance_sheet.fixed_assets.value',
    // 'Long-term Debt': 'balance_sheet.long_term_debt.value',
    Revenue: 'income_statement.revenues.value',
    'Operating Income/Loss': 'income_statement.operating_income_loss.value',
    // 'Basic Earnings Per Share':
    // 'income_statement.basic_earnings_per_share.value',
    // 'Diluted Earnings Per Share':
    //   'income_statement.diluted_earnings_per_share.value',

    // 'Research and Development Expenses':
    //   'income_statement.research_and_development.value',
    // 'Cost of Revenue': 'income_statement.cost_of_revenue.value',
    'Operating Expenses': 'income_statement.operating_expenses.value',
    'Net Cash Flow':
      'cash_flow_statement.net_cash_flow_from_operating_activities.value',
    // 'Net Cash Flow From Investing Activities':
    //   'cash_flow_statement.net_cash_flow_from_investing_activities.value',
    // 'Net Cash Flow From Financing Activities':
    //   'cash_flow_statement.net_cash_flow_from_financing_activities.value',
    'Net Income/Loss': 'income_statement.net_income_loss.value',
    'Gross Profit': 'income_statement.gross_profit.value',
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
              {/* @ts-ignore */}
              {financialData.map((data, dataIndex) => (
                <TableCell key={dataIndex}>
                  {roundToMillions(
                    eval(`data.financials.${financialKeys[key]}`)
                  )}
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
