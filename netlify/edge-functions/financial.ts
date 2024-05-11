import type { Config, Context } from '@netlify/edge-functions';
import getFinancial from './utils/getFinancial.ts';

export default async (req: Request, context: Context) => {
  const parsedUrl = new URL(req.url);
  const queryParams = Object.fromEntries(parsedUrl.searchParams.entries());
  const symbol = queryParams.symbol || '';
  console.log({ symbol });
  const polygonRes = await getFinancial(symbol);

  if (!symbol) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Netlify-CDN-Cache-Control': 'public, max-age=0, must-revalidate',
    };
    return new Response(
      JSON.stringify({ message: 'query param symbol is required' }),
      { headers, status: 400 }
    );
  }

  if (polygonRes?.status === 429) {
    const resBody = polygonRes.data;
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Netlify-CDN-Cache-Control': 'public, max-age=0, must-revalidate',
    };
    return new Response(resBody, {
      headers,
      status: 429,
    });
  }

  if (polygonRes?.status === 200) {
    const resBody = polygonRes.data;
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Netlify-CDN-Cache-Control':
        'public, max-age=604800 , stale-while-revalidate=2592000',
      'Netlify-Vary': 'query=symbol',
      'Netlify-Cache-Tag': `${symbol}, ${symbol}-financial`,
    };
    return new Response(resBody, {
      headers,
      status: 200,
    });
  } else {
    // Fallback
    return new Response(polygonRes.data, {
      status: polygonRes.status,
    });
  }
};
