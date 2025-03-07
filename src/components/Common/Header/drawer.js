import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
  const [open, SetOpen] = useState(false);

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
            </div>
        </Drawer>
    </div>
  );
}
