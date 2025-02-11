import React from 'react'
import "./styles.css";
import Button from '../../Common/Button';
import iphone from '../../../assets/iphone.png';
import gradient from '../../../assets/gradient.png';

function MainComponent() {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <h1 className='track-crypto-heading'>Track Crypto</h1>
            <h1 className='real-time-heading'>Real Time.</h1>
            <p className='info-text'>
                Crypton allows you to access real-time data about 
                cryptocurrency markets, and visualise the data in a way that is easy to understand.
            </p>
            <div className='btn-flex'>
                <Button text={"Dashboard"}/>
                <Button text={"Share"} outlined={true}/>
            </div>
        </div>
        <div className='phone-container'>
          <img src={iphone} className='iphone'/>
          <img src={gradient} className='gradient'/>
        </div>
    </div>
  )
}

export default MainComponent