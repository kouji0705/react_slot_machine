import React from "react";
import {ThemeProvider, createTheme} from "@mui/material";
import {SlotMachinePage} from "./pages";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SlotMachinePage />
    </ThemeProvider>
  );
}

export default App;
