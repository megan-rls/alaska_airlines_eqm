import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <AppBar position="static" sx={{ width: '100%', left: 0, right: 0 }}>
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div">
          Alaska Airlines Mileage Calculator
        </Typography>
        <Button color="inherit" sx={{ flexGrow: 1 }}>Calculator</Button>
        <Button color="inherit" sx={{ flexGrow: 1 }}>About</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}