import { purgeCache, Config } from '@netlify/functions';

export default async (event, context) => {
  console.log('Purging everything');
  const token = Netlify.env.get('purge_api_token');
  //   const  = context.clientContext.custom.;
  await purgeCache({
    token,
  });

  return new Response('Purged!', { status: 202 });
};

export const config: Config = {
  path: '/manual-purge',
};
