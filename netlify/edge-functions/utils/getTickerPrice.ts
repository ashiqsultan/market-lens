const POLYGON_API_KEY = Netlify.env.get('POLYGON_API_KEY');

async function getTickerPrice(symbol: string): Promise<{
  status: number;
  data: string;
}> {
  try {
    const today = new Date();
    const oneYearBefore = new Date(today);
    oneYearBefore.setFullYear(today.getFullYear() - 1);

    const toDate = today.toISOString().slice(0, 10);
    const fromDate = oneYearBefore.toISOString().slice(0, 10);
    console.log(toDate, fromDate);

    const response = await fetch(
      `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${fromDate}/${toDate}?adjusted=true&sort=asc&apiKey=${POLYGON_API_KEY}`
    );
    // Handle Polygon API free tier limitation error
    if (response.status === 429) {
      return {
        status: 429,
        data: JSON.stringify({
          message:
            'Stock Market API free limit Reached. Please try after 60 sec. Thank you',
        }),
      };
    }
    if (response.status === 200) {
      const details = await response.json();
      return {
        status: 200,
        data: JSON.stringify(details),
      };
    } else {
      return {
        status: 500,
        data: JSON.stringify('Error in Logic or external API'),
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      data: JSON.stringify('Error in Logic or external API'),
    };
  }
}

export default getTickerPrice;
