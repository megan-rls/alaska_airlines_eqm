import React from 'react';
import { ThemeProvider } from '@mui/material';
import Header from './components/Header.jsx';
import theme from './theme/theme.jsx'
import AppRoutes from './AppRoutes.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;