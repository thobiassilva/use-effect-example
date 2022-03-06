import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { mainTheme } from './config/theme/main';
import { Router } from './Router';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Router></Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
