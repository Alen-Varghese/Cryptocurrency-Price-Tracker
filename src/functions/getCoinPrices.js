import axios from "axios";

export const getCoinPrices = (id, days) => {
    const prices = axios
    .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((res) => {
        console.log("Prices>>>",res.data.prices);
        return res.data.prices;
    })
    .catch((error) => {
        console.log("ERROR>>>",error);
    });
    return prices;
}