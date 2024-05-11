import { purgeCache, Config } from '@netlify/functions';

export default async (req: Request, context) => {
  const url = new URL(req.url);
  const cacheTag = url.searchParams.get('tag');
  console.log(cacheTag);
  if (!cacheTag) {
    return;
  }
  console.log(`Purging cache with tag ${cacheTag}...`);
  const token = Netlify.env.get('purge_api_token');
  await purgeCache({
    token,
    tags: [cacheTag],
  });

  return new Response(`Completed. Purged Cache with tag ${cacheTag}!`, { status: 202 });
};

export const config: Config = {
  path: '/manual-purge',
};
