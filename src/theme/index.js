import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    black: '#212121',
    white: '#FEFEFE',
  },
  typography: {
    body1: {
      fontSize: 16,
    },
  },
});
