import React, {useState, useEffect} from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';

function DashboardPage() {

  const [coins,setCoins] = useState([]);
  const [paginatedCoins,setPaginatedCoins] = useState([]);
  const[search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value-1)*10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex+10));
  }

  const onSearchChange=(e)=>{
    setSearch(e.target.value);
  }

  var filteredCoins = coins.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {

    axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=3'
    )
    .then((res) => {
      console.log("RESPONSE>>>",res);
      setCoins(res.data);
      setPaginatedCoins(res.data.slice(0,10));
    })
    .catch((error) => {
      console.log("ERROR>>>",error);
    });
  }, []);

  return (
    <div>
        <Header/>
        <Search search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins={search?filteredCoins : paginatedCoins}/>
        {!search && (
           <PaginationComponent page={page} handlePageChange={handlePageChange}/>
        )}
    </div>
  )
}

export default DashboardPage