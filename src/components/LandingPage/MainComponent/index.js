import React from 'react'
import "./styles.css";
import Button from '../../Common/Button';
import iphone from '../../../assets/iphone.png';
import gradient from '../../../assets/gradient.png';
import {motion} from 'framer-motion';
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

function MainComponent() {
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 
              className='track-crypto-heading'
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 1}}
            >
              Track Crypto</motion.h1>
            <motion.h1 className='real-time-heading'
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.5}}
            >
              Real Time.</motion.h1>
            <motion.p className='info-text'
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 1}}
            >
                Crypton provides real-time cryptocurrency market data with easy-to-understand visuals.
            </motion.p>
            <motion.div className='btn-flex'
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 1.5}}
            >
              <a href="/dashboard">
                <Button text={"Dashboard"} />
              </a>
              <RWebShare
                data={{
                text: "CryptoDashboard made by Avi Vashishta using React JS.",
                url: "https://crypt-on.netlify.app",
                title: "Crypt-on.",
                }}
                onClick={() => toast.info("App Shared!")}
              >
                <Button text={"Share App"} outlined={true} />
              </RWebShare>
            </motion.div>
        </div>
        <div className='phone-container'>
          <motion.img 
          src={iphone} 
          className='iphone'
          initial={{y:-10}}
          animate={{y:10}}
          transition={{
            type: 'smooth',
            repeatType: "mirror",
            repeat: Infinity, 
            duration: 2
          }}
          />
          <img src={gradient} className='gradient'/>
        </div>
    </div>
  )
}

export default MainComponent