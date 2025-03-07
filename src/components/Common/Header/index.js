import React from 'react'
import "./styles.css";
import TemporaryDrawer from './drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Header() {
  return <div className='navbar'>
    <h1 className='logo'>
      Crypton<span style={{color:"var(--blue)"}}>.</span>
    </h1>
    <div className='Links'>
      <Link to='/'>
        <p className='Link'>Home</p>
      </Link>
      <Link to='/compare'>
        <p className='Link'>Compare</p>
      </Link>
      <Link to='/watchlist'>
        <p className='Link'>WatchList</p>
      </Link>
      <Link to='/dashboard'>
        <Button 
          text={'Dashboard'}
          outlined={true}
          onClick={()=> console.log("Btn Clicked")}
        />
      </Link>
    </div>
    <div className='mobile-drawer'>
        <TemporaryDrawer/>
    </div>
  </div>
}

export default Header;