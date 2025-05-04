import axios from "axios";

export const get100Coins = () => {
    const myCoins = axios
        .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=3'
        )
        .then((res) => {
        console.log("RESPONSE>>>",res);
        return res.data;
        })
        .catch((error) => {
        console.log("ERROR>>>",error);
        });
        
    return myCoins;
}