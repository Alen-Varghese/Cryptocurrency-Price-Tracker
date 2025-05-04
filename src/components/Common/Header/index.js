import { useEffect, useState } from 'react'
import "./styles.css";
import TemporaryDrawer from './drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

function Header() {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return <div className='navbar'>
    <h1 className='logo'>
      Crypt-on<span style={{color:"var(--blue)"}}>.</span>
    </h1>
    <div className='Links'>
    <Switch checked={darkMode} onClick={() => changeMode()} />
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