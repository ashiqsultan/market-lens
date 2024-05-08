import { purgeCache, Config } from '@netlify/functions';

export default async () => {
  console.log('Purging everything');

  await purgeCache();

  return new Response('Purged!', { status: 202 });
};

export const config: Config = {
  path: '/purge',
};
