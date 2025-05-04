import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Switch from "@mui/material/Switch";

export default function TemporaryDrawer() {
    const [open, SetOpen] = useState(false);
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

  return (
    <div>
        <IconButton onClick={()=>SetOpen(true)}>
            <MenuRoundedIcon className='Link' />
        </IconButton>
        <Drawer anchor={"right"} open={open} onClose={()=> SetOpen(false)}>
            <div className='drawer-div'>
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
                    <p className='Link'>Dashboard</p>
                </Link>
                <Switch checked={darkMode} onClick={() => changeMode()} />
            </div>
        </Drawer>
    </div>
  );
}
