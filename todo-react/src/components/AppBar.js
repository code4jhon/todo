import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar style={{position: 'absolute', left: '16px'}} sx={{ bgcolor: 'purple' }}>MV</Avatar>
          <Typography style={{textAlign: 'center'}} variant="h9" component="div" sx={{ flexGrow: 1 }}>Things I'd like to learn</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}