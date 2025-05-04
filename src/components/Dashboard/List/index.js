import './styles.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";
import { useState } from 'react'

function List({coin, delay}) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
    <motion.tr
        className="list-row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
      <Tooltip title="Coin Logo">
        <td className='td-image'>
             <img src={coin.image} className='coin-logo'/>
        </td>
      </Tooltip>
      <Tooltip title="Coin Info" placement='bottom-start'>
      <td>
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </td>
        </Tooltip>
        <Tooltip title="Price Change (24h)" placement='bottom-start'>
        {coin.price_change_percentage_24h > 0 ? (
          <td className='chip-flex'>
            <div className='price-chip'>
            {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip td-icon'>
              <TrendingUpRoundedIcon/>
            </div>
          </td>
        ) : (
          <td className='chip-flex'>
            <div className='price-chip chip-red'>
            {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip chip-red td-icon'>
              <TrendingDownRoundedIcon/>
            </div>
          </td>
        )}
        </Tooltip>
        <Tooltip title="Current Price">
        <td>
        <h3 
          className='coin-price td-center-align' 
          style={{color: 
            coin.price_change_percentage_24h < 0
             ? "var(--red)"
             : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement='bottom'>
        <td className='desktop-td-mkt'>
        <p className='total_volume td-right-align '>
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement='bottom-end'>
        <td >
        <p className='total_volume td-right-align td-total-volume'>
            {coin.total_volume.toLocaleString()}
          </p>
        </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement='bottom-end'>
        <td className='mobile-td-mkt'>
        <p className='total_volume td-right-align'>
            ${convertNumbers(coin.market_cap)}
          </p>
        </td>
        <td
          className={`watchlist-icon ${
            coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
          }`}
          onClick={(e) => {
            if (isCoinAdded) {
              // remove coin
              removeItemToWatchlist(e, coin.id, setIsCoinAdded);
            } else {
              setIsCoinAdded(true);
              saveItemToWatchlist(e, coin.id);
            }
          }}
        >
          {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
        </td>
        </Tooltip>
        </motion.tr>
    </Link>
  );
}
export default List