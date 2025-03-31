import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    useEffect(() => {
        if (id) {
            axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => {
            console.log("RESPONSE>>>",res);
            coinObject(setCoinData, res.data);
            setIsLoading(false);
            })
            .catch((error) => {
            console.log("ERROR>>>",error);
            setIsLoading(false);
            });
        }
    }, [id]);
    
    return (
    <div>
        <Header/>
        {isLoading ? (
            <Loader/> 
        ) :(
        <>
        <div className='grey-wrapper'>
            <List coin={coinData} />    
        </div>
        </>
        )}
    </div>
  )
}

export default CoinPage