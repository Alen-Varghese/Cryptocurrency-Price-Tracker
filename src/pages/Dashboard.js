import React, {useState, useEffect} from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';

function DashboardPage() {

  const [coins,setCoins] = useState([]);

  useEffect(() => {

    axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=3'
    )
    .then((res) => {
      console.log("RESPONSE>>>",res);
      setCoins(res.data);
    })
    .catch((error) => {
      console.log("ERROR>>>",error);
    });
  }, []);

  return (
    <div>
        <Header/>
        <TabsComponent coins={coins}/>
    </div>
  )
}

export default DashboardPage