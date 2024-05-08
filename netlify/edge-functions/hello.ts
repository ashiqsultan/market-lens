import type { Config, Context } from '@netlify/edge-functions';

export default async (req: Request, context: Context) => {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const resBody = String(getRandomInt(1, 99));

  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=0, must-revalidate',
    'Netlify-CDN-Cache-Control':
      'public, max-age=120, stale-while-revalidate=300',
  };

  console.log(resBody);
  return new Response(resBody, {
    headers,
    status: 200,
  });
};

export const config: Config = {
  cache: 'manual',
  path: '/',
};
