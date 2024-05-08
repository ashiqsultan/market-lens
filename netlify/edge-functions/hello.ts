import type { Config, Context } from '@netlify/edge-functions';

export default async (req: Request, context: Context) => {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const resBody = String(getRandomInt(1, 99));

  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=0, must-revalidate', // Tell browsers to always revalidate
    'Netlify-CDN-Cache-Control':
      'public, max-age=10, stale-while-revalidate=120', // Tell Edge to cache asset for 120sec
  };

  console.log(resBody);
  return new Response(resBody, {
    headers,
    status: 200,
  });
};

export const config: Config = {
  path: '/',
};
