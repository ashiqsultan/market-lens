import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { useNavigate } from 'react-router-dom';

const Logo = ({ isSmall }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const isMini = isSmall || isBelowMd;
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
        variant={isMini ? 'h4' : 'h2'}
        fontWeight={700}
        color={'primary'}
      >
        Market
      </Typography>
      <Typography variant={isMini ? 'h4' : 'h2'} fontWeight={700} color={''}>
        Lens
      </Typography>
      <ShowChartIcon fontSize={isMini ? 'medium' : 'large'} />
    </Box>
  );
};

export default Logo;
