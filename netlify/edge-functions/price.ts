import type { Config, Context } from '@netlify/edge-functions';
import getTickerPrice from './utils/getTickerPrice.ts';

export default async (_req: Request, context: Context) => {
  const symbol = context.params.symbol || '';
  console.log({ symbol });
  const polygonRes = await getTickerPrice(symbol);

  if (polygonRes?.status === 429) {
    const resBody = polygonRes.data;
    const headers = {
      'Content-Type': 'application/json',
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
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Netlify-CDN-Cache-Control':
        'public, max-age=120, stale-while-revalidate=300',
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

export const config: Config = {
  cache: 'manual',
  path: '/ticker-price/:symbol',
};
