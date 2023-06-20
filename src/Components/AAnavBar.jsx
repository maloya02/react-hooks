import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const AAnavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" sx={{justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',}}>
            React Hooks
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AAnavBar;
