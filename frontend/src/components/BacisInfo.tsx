import { Divider, Typography, Box } from '@mui/material';

const BasicInfo = ({ name, lastClosePrice, date }) => {
  return (
    <>
      <Typography variant='h5' fontWeight={'500'}>
        {name}
      </Typography>
      <Divider
        sx={{
          marginBlock: '5px',
        }}
      />
      <Box display={'flex'} alignItems={'center'} columnGap={'1rem'}>
        <Typography variant='h5' fontWeight={'500'} fontSize={'2rem'}>
          {'$ '}
          {lastClosePrice}
        </Typography>
        <Typography variant='body1' fontWeight={'400'} fontSize={'0.8rem'}>
          {date}
        </Typography>
      </Box>
      <Typography variant='body1' fontWeight={'400'} fontSize={'0.8rem'}>
        Note price is not live and delayed by a day.
      </Typography>
    </>
  );
};

export default BasicInfo;
