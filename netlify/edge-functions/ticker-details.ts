import type { Config, Context } from '@netlify/edge-functions';

export default async (_req: Request, context: Context) => {
  // const parsedUrl = new URL(req.url);
  // const pathParams = parsedUrl.pathname.split('/').filter(Boolean); // ["ticker-details", "AAPL"]
  // const queryParams = Object.fromEntries(parsedUrl.searchParams.entries()); // { limit: "desc" }
  const symbol = context.params.symbol;
  console.log({ symbol });
  const POLYGON_API_KEY = Netlify.env.get('POLYGON_API_KEY');

  async function getStockDetails(): Promise<{
    status: number;
    data: string;
  } | null> {
    try {
      const response = await fetch(
        `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=${POLYGON_API_KEY}`
      );
      if (response.status === 429) {
        return {
          status: 429,
          data: JSON.stringify({
            message:
              'Free Stock Market API limit Reached. Please try after 60 sec. Thank you',
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
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  const stockDetails = await getStockDetails();

  // TODO Add 429 conditrin check here

  if (stockDetails?.status === 429) {
    const headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    };
    return new Response(stockDetails.data, {
      headers,
      status: 429,
    });
  }
  if (stockDetails?.status === 200) {
    const resBody = stockDetails.data;
    const headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Netlify-CDN-Cache-Control':
        'public, max-age=120, stale-while-revalidate=300',
      // 'Access-Control-Allow-Origin': '*',
    };
    return new Response(resBody, {
      headers,
      status: 200,
    });
  } else {
    return new Response('Something went wrong', {
      status: 400,
    });
  }
};

export const config: Config = {
  cache: 'manual',
  path: '/ticker-details/:symbol',
};
