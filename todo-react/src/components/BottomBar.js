import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

export default function BottomBar (props) {

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
      <IconButton color="inherit" aria-label="open drawer" onClick={() => alert('not available in the free version')}>
        <SettingsIcon />
      </IconButton>
      </Toolbar>
    </AppBar>
  )
}