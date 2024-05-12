import { Typography, Box, Chip } from '@mui/material';
import MainSearch from '../components/MainSearch';
import sandp500list from '../components/sandp500list';
import Logo from '../components/logo';
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
      <Logo isSmall={false} />
      <Typography variant='h5'>Stock analysis tool for investors</Typography>
      <MainSearch />
      <Typography variant='body1'>
        Or select any of the popular stocks from below
      </Typography>

      <Box
        display={'flex'}
        columnGap={'1rem'}
        flexWrap={'wrap'}
        rowGap={'1rem'}
        justifyContent={'center'}
      >
        {sandp500list.slice(0, 7).map((item) => {
          return (
            <Chip
              label={item.id}
              component='a'
              href={`stock/${item.id}`}
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
