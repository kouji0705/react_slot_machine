import React from "react";
import {SlotMachine} from "./features/slotMachine/components";
import {ThemeProvider, createTheme} from "@mui/material";

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
      <SlotMachine />
    </ThemeProvider>
  );
}

export default App;
