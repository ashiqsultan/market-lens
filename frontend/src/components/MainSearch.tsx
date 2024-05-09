import React, { useRef } from 'react';
import { InputAdornment, IconButton, Box } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';

export default function MainSearch() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSearch = () => {
    const value = inputRef.current?.value.trim();
    if (value) {
      navigate(`/stock/${value}`);
    }
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box
      display={'flex'}
      columnGap={'0.5rem'}
      sx={{
        width: '40vw',
        [theme.breakpoints.down('md')]: {
          width: '80vw',
        },
      }}
    >
      <OutlinedInput
        size='medium'
        placeholder='Search for Ticker: AAPL'
        inputRef={inputRef}
        onKeyDown={handleKeyPress}
        sx={{
          width: '100%',
          borderRadius: '50%',
          [`& fieldset`]: {
            borderRadius: 60,
          },
        }}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={handleSearch} edge='end'>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}
