import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HowMilesWorkPage from './pages/HowMilesWorkPage.jsx';
import { Typography } from '@mui/material';
import CalculatorPage from './pages/CalculatorPage.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Typography variant='h3'>Welcome to the Alaska Airlines Mileage Calculator</Typography>} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/how-miles-work" element={<HowMilesWorkPage />} />
    </Routes>
  );
}

export default AppRoutes;