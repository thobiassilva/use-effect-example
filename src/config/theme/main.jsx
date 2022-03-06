import { createTheme } from '@mui/material';
import { pink, red } from '@mui/material/colors';

export const mainTheme = createTheme({
  palette: {
    background: {},
    primary: {
      main: red.A100,
    },
    myColor: {
      main: pink.A200,
    },
  },
  typography: {
    h3: {
      fontSize: 30,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
        },
        body: {
          height: '100vh',
          width: '100vw',
        },
      },
    },
  },
});
