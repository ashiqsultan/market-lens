import handlePolygonAPIRes from './handlePolygonAPIRes.ts';
import { AppRes } from './types.ts';

const POLYGON_API_KEY = Netlify.env.get('POLYGON_API_KEY');

async function getNews(symbol: string): Promise<AppRes> {
  try {
    const polygonRes = await fetch(
      `https://api.polygon.io/v2/reference/news?ticker=${symbol}&limit=4&apiKey=${POLYGON_API_KEY}`
    );
    const response = await handlePolygonAPIRes(polygonRes);
    return response;
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      data: JSON.stringify('Error in Logic or external API'),
    };
  }
}

export default getNews;
