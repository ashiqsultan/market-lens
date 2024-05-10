import { AppRes } from './types.ts';

async function handlePolygonAPIRes(response: Response): Promise<AppRes> {
  // Handle Polygon limit error
  if (response.status === 429) {
    return {
      status: 429,
      data: JSON.stringify({
        message:
          'Stock Market API free limit Reached. Please try after 60 sec. Thank you',
      }),
    };
  }
  if (response.status === 200) {
    const resData = await response.json();
    return {
      status: 200,
      data: JSON.stringify(resData),
    };
  } else {
    return {
      status: 500,
      data: JSON.stringify('Error in Logic or external API'),
    };
  }
}
export default handlePolygonAPIRes;
