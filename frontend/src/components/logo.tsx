import { Typography, Box } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { useNavigate } from 'react-router-dom';

const Logo = ({ isSmall }) => {
  const navigate = useNavigate();
  return (
    <Box
      display={'flex'}
      columnGap={'0.2rem'}
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={() => {
        navigate('/');
      }}
    >
      <Typography
        variant={isSmall ? 'h4' : 'h2'}
        fontWeight={700}
        color={'primary'}
      >
        Market
      </Typography>
      <Typography variant={isSmall ? 'h4' : 'h2'} fontWeight={700} color={''}>
        Lens
      </Typography>
      <ShowChartIcon fontSize={isSmall ? 'medium' : 'large'} />
    </Box>
  );
};

export default Logo;
