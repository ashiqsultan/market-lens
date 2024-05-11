import { Divider, Typography, Box, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

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
      <Box display={'flex'} alignItems={'center'} columnGap={'0.5rem'}>
        <Typography variant='h5' fontWeight={'500'} fontSize={'2rem'}>
          {'$ '}
          {lastClosePrice}
        </Typography>
        <Typography variant='body1' fontWeight={'400'} fontSize={'0.8rem'}>
          {date}
        </Typography>
        <Tooltip title='Note: Price is not live'>
          <IconButton size='small'>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default BasicInfo;
