import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';

const airportCodes = [
  {
    value: 'PDX',
    label: 'PDX',
  },
  {
    value: 'SEA',
    label: 'SEA',
  },
  {
    value: 'SFO',
    label: 'SFO',
  },
  {
    value: 'OAK',
    label: 'OAK',
  },
];

function CalculatorPage() {

  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');

  const [submittedDeparture, setSubmittedDeparture] = useState(null);
  const [submittedArrival, setSubmittedArrival] = useState(null);

// when departure changes, value is stored in departureAirport
  const handleDepartureChange = (event) => {
    setDepartureAirport(event.target.value);
  };

  // when arrival changes, value is stored in arrivalAirport
  const handleArrivalChange = (event) => {
    setArrivalAirport(event.target.value);
  };


// when submit button is clicked, store value in submittedValue
  const handleButtonClick = () => {
    setSubmittedDeparture(departureAirport);
    setSubmittedArrival(arrivalAirport);
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        pt: 4,
        pb: 4,
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="departure-airport-code"
          select
          label="Departure Airport"
          value={departureAirport}
          onChange={handleDepartureChange}
        >
          {airportCodes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="arrival-airport-code"
          select
          label="Arrival Airport"
          value={arrivalAirport}
          onChange={handleArrivalChange}
        >
          {airportCodes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button variant="contained" onClick={handleButtonClick}>Submit</Button>
      {submittedDeparture && submittedArrival && (
        <p>Stored Value: {submittedDeparture} and {submittedArrival}</p>
        )}
    </Box>
  );
}

export default CalculatorPage;