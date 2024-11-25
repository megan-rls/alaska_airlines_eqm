import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Calculator', 'FAQ'];

export default function HeaderAppBar() {
  return (
    <AppBar position="static" sx={{ width: '100%', left: 0, right: 0 }}>
      <Container  maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
            Alaska Airlines Mileage Calculator
          </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {pages.map((page) => (
                  <MenuItem key={page} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
              ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}