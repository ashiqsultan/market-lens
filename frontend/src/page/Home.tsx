import { Typography, Box, Chip } from '@mui/material';
import MainSearch from '../components/MainSearch';
import sandp500list from '../components/sandp500list';

const Home = () => {
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      rowGap={'1.5rem'}
    >
      <Typography variant='h2'>Market Lens</Typography>
      <Typography variant='h5'>Stock analysis tool for investors</Typography>
      <MainSearch />
      <Typography variant='body1'>
        Or select any of the popular stocks from below
      </Typography>

      <Box display={'flex'} columnGap={'1rem'}>
        {sandp500list.slice(0, 7).map((item) => {
          return (
            <Chip
              label={item.id}
              component='a'
              href='stock/item.d'
              variant='outlined'
              clickable
              color='primary'
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default Home;
