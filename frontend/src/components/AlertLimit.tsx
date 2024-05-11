import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AlertLimit({ resourceName }) {
  return (
    <Alert severity='info'>
      <AlertTitle>{resourceName} free tier limit reached</AlertTitle>
      The stock market API free tier plan allows only 5 API calls per minute. If
      you are seeing this error you are likely looking for a stock which is not
      cached yet.
      <br />
      <strong>Please try after 60 seconds</strong> or try searching for a stock
      you already visited, its likely to be served from Netlify Cache.
    </Alert>
  );
}
