import handlePolygonAPIRes from './handlePolygonAPIRes.ts';
import { AppRes } from './types.ts';

const POLYGON_API_KEY = Netlify.env.get('POLYGON_API_KEY');

async function getTickerPrice(symbol: string): Promise<AppRes> {
  try {
    const today = new Date();
    const oneYearBefore = new Date(today);
    oneYearBefore.setFullYear(today.getFullYear() - 1);

    const toDate = today.toISOString().slice(0, 10);
    const fromDate = oneYearBefore.toISOString().slice(0, 10);

    const polygonRes = await fetch(
      `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${fromDate}/${toDate}?adjusted=true&sort=asc&apiKey=${POLYGON_API_KEY}`
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

export default getTickerPrice;
