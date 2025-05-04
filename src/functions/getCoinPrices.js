import axios from "axios";

export const getCoinPrices = (id, days, priceType, setError) => {
    const prices = axios
    .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        { crossDomain: true }
    )
    .then((res) => {
        if (res.data) {
            console.log("Prices>>>", res.data);
            if (priceType == "market_caps") {
              return res.data.market_caps;
            } else if (priceType == "total_volumes") {
              return res.data.total_volumes;
            } else {
              return res.data.prices;
            }
          }
    })
    .catch((error) => {
        console.log("ERROR>>>",error);
        if (setError) {
            setError(true);
          }
    });
    return prices;
}