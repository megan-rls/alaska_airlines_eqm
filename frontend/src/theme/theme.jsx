import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01426a',
      contrastText: '#fafafa'
    },
    secondary: {
      main: '#6a0142',
      contrastText: '#fafafa'
    },
  },
  // Other theme customizations...
});

export default theme;