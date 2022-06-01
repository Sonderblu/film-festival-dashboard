import React from "react";
import Router from "./router/";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "config/theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
