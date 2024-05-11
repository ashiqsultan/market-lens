import { Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import optionsList from './sandp500list';

export default function MainSearch() {
  const navigate = useNavigate();
  const theme = useTheme();

  const filterOptions = createFilterOptions({
    limit: 7,
  });

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      columnGap={'0.5rem'}
      sx={{
        width: '40vw',
        [theme.breakpoints.down('md')]: {
          width: '80vw',
        },
      }}
    >
      {/* For Autocomplete search by company name I have included only S&P 500 stocks. To search for other companies directly enter the ticker symbol and hit enter */}
      <Autocomplete
        onChange={(event: any, newValue: string | null) => {
          console.log('newValue', newValue);
          if (newValue.id) {
            navigate(`/stock/${newValue.id}`);
          } else if (typeof newValue === 'string' && newValue.length > 0) {
            navigate(`/stock/${newValue}`);
          }
        }}
        freeSolo
        disableClearable
        filterOptions={filterOptions}
        options={optionsList}
        renderInput={(params) => (
          <TextField
            placeholder='Search for Ticker: AAPL'
            sx={{
              width: '100%',
              borderRadius: '50%',
              [`& fieldset`]: {
                borderRadius: 60,
              },
            }}
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Box>
  );
}
