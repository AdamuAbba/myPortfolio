import { createTheme } from '@mui/material/styles';
import { colors } from 'configs/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.shyPink,
      contrastText: '#fff',
    },
    secondary: {
      main: colors.shyDark,
    },
  },
  typography: {
    fontFamily: ['Quicksand'].join(','),
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h6: {
      color: 'white',
      textShadow: '2px 4px 3px rgba(0, 0, 0, 0.3)',
    },
  },
});

export { theme };
