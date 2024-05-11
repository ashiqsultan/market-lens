import axios from 'axios';

// axios instance
const instance = axios.create({
  baseURL: '',
});

export const getNews = async (symbol: string) => {
  try {
    const response = await instance.get(`/api/news/${symbol}`);
    return response.data;
  } catch (error) {
    // @ts-ignore
    if (error.response.status === 429) {
      return {
        status: 429,
        message: 'Too many requests',
      };
    }
    return {
      status: 500,
      message: 'Something went wrong',
    };
  }
};

export const getPrice = async (symbol: string) => {
  try {
    const response = await instance.get(`/api/price/${symbol}`);
    return response.data;
  } catch (error) {
    // @ts-ignore
    if (error.response.status === 429) {
      return {
        status: 429,
        message: 'Too many requests',
      };
    }
    return {
      status: 500,
      message: 'Something went wrong',
    };
  }
};

export const getFinancial = async (symbol: string) => {
  try {
    const response = await instance.get(`/api/financial/?symbol=${symbol}`);
    return response.data;
  } catch (error) {
    // @ts-ignore
    if (error.response.status === 429) {
      return {
        status: 429,
        message: 'Too many requests',
      };
    }
    return {
      status: 500,
      message: 'Something went wrong',
    };
  }
};

export const getStockData = async (symbol: string) => {
  try {
    const [news, price, financial] = await Promise.all([
      getNews(symbol),
      getPrice(symbol),
      getFinancial(symbol),
    ]);
    console.log({ news, price, financial });
    return { news, price, financial };
  } catch (error) {
    console.log('error in getStock data API call');
    console.log(error);
    return {
      status: 500,
      message: 'getStockData Something went wrong',
    };
  }
};
