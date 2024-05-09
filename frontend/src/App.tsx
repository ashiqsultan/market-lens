import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Home from './page/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00b386',
    },
    background: {
      default: '#ffffff',
    },
  },
});

function App() {
  const appStyle = {
    margin: '10px 14px',
    [theme.breakpoints.up('md')]: {
      margin: '20px 50px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '24px 128px',
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Box sx={appStyle}>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
