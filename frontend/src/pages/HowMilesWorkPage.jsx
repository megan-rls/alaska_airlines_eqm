import React from 'react'
import { Container, Stack, Typography } from '@mui/material';
import BasicTable from '../components/BasicTable.jsx';
import AlaskaFirstMiles from '../local_data/AlaskaFirstMiles.json';
import AlaskaEconomyMiles from '../local_data/AlaskaEconomyMiles.json';

function HowMilesWorkPage() {
  return (
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
  )
}
export default HowMilesWorkPage;