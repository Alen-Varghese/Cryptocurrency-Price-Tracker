import React from 'react'
import "./styles.css";
import TemporaryDrawer from './drawer';
import Button from '../Button';

function Header() {
  return <div className='navbar'>
    <h1 className='logo'>
      Crypton<span style={{color:"var(--blue)"}}>.</span>
    </h1>
    <div className='Links'>
      <a href='/'>
        <p className='Link'>Home</p>
      </a>
      <a href='/'>
        <p className='Link'>Compare</p>
      </a>
      <a href='/'>
        <p className='Link'>WatchList</p>
      </a>
      <a href='#'>
        <Button 
          text={'Dashboard'}
          outlined={true}
          onClick={()=> console.log("Btn Clicked")}
        />
      </a>
    </div>
    <div className='mobile-drawer'>
        <TemporaryDrawer/>
    </div>
  </div>
}

export default Header;