import React from 'react';
import { ThemeProvider, Container, Stack, Typography } from '@mui/material';
import Header from './components/Header';
import BasicTable from './components/BasicTable';
import AlaskaFirstMiles from './local_data/AlaskaFirstMiles.json';
import AlaskaEconomyMiles from './local_data/AlaskaEconomyMiles.json';
import theme from './theme/theme.jsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 4,
          pb: 4,
        }}
      >
        <Stack spacing={2} mt={2} width="100%">
          <BasicTable mileageData={AlaskaFirstMiles}/>
          <BasicTable mileageData={AlaskaEconomyMiles}/>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;