import { Typography } from '@mui/material';

const AboutStock = () => {
  const stock = {
    ticker: 'META',
    name: 'Meta Platforms, Inc. Class A Common Stock',
    market: 'stocks',
    locale: 'us',
    primary_exchange: 'XNAS',
    type: 'CS',
    active: true,
    currency_name: 'usd',
    cik: '0001326801',
    composite_figi: 'BBG000MM2P62',
    share_class_figi: 'BBG001SQCQC5',
    market_cap: 1.1987660586666e12,
    phone_number: '650-543-4800',
    address: {
      address1: '1 META WAY',
      city: 'MENLO PARK',
      state: 'CA',
      postal_code: '94025',
    },
    description:
      "Meta is the world's largest online social network, with nearly 4 billion family of apps monthly active users. Users engage with each other in different ways, exchanging messages and sharing news events, photos, and videos. The firm's ecosystem consists mainly of the Facebook app, Instagram, Messenger, WhatsApp, and many features surrounding these products. Users can access Facebook on mobile devices and desktops. Advertising revenue represents more than 90% of the firm's total revenue, with more than 45% coming from the US and Canada and over 20% from Europe.",
    sic_code: '7370',
    sic_description: 'SERVICES-COMPUTER PROGRAMMING, DATA PROCESSING, ETC.',
    ticker_root: 'META',
    homepage_url: 'https://about.meta.com',
    total_employees: 69329,
    list_date: '2012-05-18',
    branding: {
      logo_url:
        'https://api.polygon.io/v1/reference/company-branding/YWJvdXQubWV0YS5jb20/images/2024-04-01_logo.svg',
      icon_url:
        'https://api.polygon.io/v1/reference/company-branding/YWJvdXQubWV0YS5jb20/images/2024-04-01_icon.png',
    },
    share_class_shares_outstanding: 2191450000,
    weighted_shares_outstanding: 2536534191,
    round_lot: 100,
  };
  return (
    <>
      <Typography variant='h5' gutterBottom>
        {stock.name} ({stock.ticker})
      </Typography>

      <Typography variant='h5' gutterBottom>
        About
      </Typography>

      <Typography variant='body1' gutterBottom>
        {stock.description}
      </Typography>

      {/* <TableContainer component={Paper}>
        <Table aria-label='stock-details-table'>
          <TableBody>
            <TableRow>
              <TableCell>Market Cap</TableCell>
              <TableCell>${stock.market_cap.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
                {stock.address.address1}, {stock.address.city},{' '}
                {stock.address.state}, {stock.address.postal_code}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone Number</TableCell>
              <TableCell>{stock.phone_number}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Homepage URL</TableCell>
              <TableCell>
                <a
                  href={stock.homepage_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {stock.homepage_url}
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
};

export default AboutStock;
