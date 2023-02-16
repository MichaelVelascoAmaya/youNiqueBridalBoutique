import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#f05696',
    },
    secondary: {
      main: '#917944',
    },
    white: {
      main: '#FFFFFF',
    },
    black: {
      main: '#000000',
    },
  },
}));

export default theme;