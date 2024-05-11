import AlertLimit from './AlertLimit';
import BasicInfo from './BacisInfo';
import PriceChart from './PriceChart';

const PriceLayout = ({ priceRes, financialRes, symbol }) => {
  if (priceRes.status === 429 || financialRes.status === 429) {
    return <AlertLimit resourceName={'Price Data'} />;
  }
  if (
    Array.isArray(financialRes.results) &&
    financialRes.results[0]?.company_name
  ) {
    const companyName = financialRes.results[0]?.company_name;
    if (Array.isArray(priceRes.results)) {
      const lastPriceObj = priceRes.results[priceRes.results.length - 1];
      const closingPrice = lastPriceObj.vw;
      const date = new Date(lastPriceObj.t).toISOString().slice(0, 10);
      return (
        <div>
          <BasicInfo
            name={`${companyName} (${symbol})`}
            lastClosePrice={closingPrice}
            date={date}
          />
          <PriceChart priceRes={priceRes} />
        </div>
      );
    }
  }
  return <></>;
};
export default PriceLayout;
