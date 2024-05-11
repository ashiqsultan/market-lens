import type { Config, Context } from '@netlify/edge-functions';
import getPrice from './utils/getPrice.ts';

export default async (_req: Request, context: Context) => {
  const symbol = context.params.symbol || '';
  console.log({ symbol });
  const polygonRes = await getPrice(symbol);

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
        'public, max-age=120, stale-while-revalidate=300',
      'Cache-Tag': `${symbol}, ${symbol}-price`,
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
