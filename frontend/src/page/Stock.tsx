import { useParams } from 'react-router-dom';
import AboutStock from '../components/AboutStock';
import Financial from '../components/Financial';

const StockDetails = () => {
  const params = useParams();
  const symbol = params.symbol || '';

  return (
    <>
      <AboutStock />
      <Financial />
    </>
  );
};

export default StockDetails;
