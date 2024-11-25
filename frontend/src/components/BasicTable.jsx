import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function BasicTable( {mileageData} ) {
  return (
    <div>
      <Typography variant='h4' sx={{ mb: 1 }}>{mileageData.title}</Typography>
      <TableContainer component={Paper} sx={{ maxWidth: '1200px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold'}}>Purchased fare class</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold'}}>Base miles</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold'}}>Bonus miles</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold'}}>Total</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold'}}>Elite-qualifying miles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mileageData.fareClasses.map((fareClass, index) => (
              <TableRow key={index}>
                <TableCell>{fareClass.purchasedFareClass}</TableCell>
                <TableCell align="center">{fareClass.baseMiles}</TableCell>
                <TableCell align="center">{fareClass.bonusMiles}</TableCell>
                <TableCell align="center">{fareClass.total}</TableCell>
                <TableCell align="center">{fareClass.eliteQualifyingMiles}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}