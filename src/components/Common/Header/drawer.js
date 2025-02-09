import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

export default function TemporaryDrawer() {
  const [open, SetOpen] = useState(false);

  return (
    <div>
        <IconButton onClick={()=>SetOpen(true)}>
            <MenuRoundedIcon className='Link' />
        </IconButton>
        <Drawer anchor={"right"} open={open} onClose={()=> SetOpen(false)}>
            <div className='drawer-div'>
                <a href='/'>
                    <p className='Link'>Home</p>
                </a>
                <a href='/'>
                    <p className='Link'>Compare</p>
                </a>
                <a href='/'>
                    <p className='Link'>WatchList</p>
                </a>
                <a href='/'>
                    <p className='Link'>Dashboard</p>
                </a>
            </div>
        </Drawer>
    </div>
  );
}
