import { Typography, Box, Chip } from '@mui/material';
import MainSearch from '../components/MainSearch';

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

      {/* TODO: Create an array and map over the items */}
      <Box display={'flex'} columnGap={'1rem'}>
        <Chip
          label='AAPL'
          component='a'
          href='#basic-chip'
          variant='outlined'
          clickable
          color='primary'
        />
        <Chip
          label='MSFT'
          component='a'
          href='#basic-chip'
          variant='outlined'
          clickable
          color='primary'
        />
        <Chip label='AMZN' />
        <Chip label='GOOGL' />
        <Chip label='META' />
      </Box>
    </Box>
  );
};
export default Home;
