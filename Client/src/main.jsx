import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

const Root = () => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline /> 
      <App toggleTheme={toggleTheme} mode={mode} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
