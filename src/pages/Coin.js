
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import TogglePriceType from '../components/Coin/PriceType';
import { Button } from '@mui/material';

function CoinPage() {
    const { id } = useParams();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState('prices');

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);
    
    async function getData() {
        const data = await getCoinData(id, setError);
        coinObject(setCoinData, data);
        if (data) {
            const prices = await getCoinPrices(id, days, priceType, setError);
            if(prices.length > 0){ 
                settingChartData(setChartData, prices);
                setIsLoading(false);
            }
        }
    }

    const handleDaysChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);
        const prices = await getCoinPrices(id, event.target.value, priceType, setError);
        if(prices.length > 0){
            settingChartData(setChartData, prices);
            setIsLoading(false);
        }
    };

    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices = await getCoinPrices(id, days, newType, setError);
            if(prices.length > 0){
                settingChartData(setChartData, prices);
                setIsLoading(false);
            }
    };
    
    return (
        <>
        <Header />
        {!error && !isLoading && coinData.id ? (
          <>
            <div className="grey-wrapper">
              <List coin={coinData} delay={0.5} />
            </div>
            <div className="grey-wrapper" style={{padding: "0rem 1rem"}}>
              <SelectDays days={days} handleDaysChange={handleDaysChange} />
              <TogglePriceType 
                  priceType={priceType} 
                  handlePriceTypeChange={handlePriceTypeChange}
              />
              <LineChart chartData={chartData} priceType={priceType} />
            </div>
            <CoinInfo heading={coinData.name} desc={coinData.desc}/>
          </>
        ) : error ? (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Sorry, Couldn't find the coin you're looking for 😞
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
              }}
            >
              <a href="/dashboard">
                <Button text="Dashboard" />
              </a>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </>
  )
}

export default CoinPage