import { amber, blueGrey, deepPurple, indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: blueGrey[600],
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Arial", sans-serif`,
    h1: { fontSize: "2rem", fontWeight: 600 },
    h2: { fontSize: "1.75rem", fontWeight: 500 },
    h3: { fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem" },
  },
  shape: {
    borderRadius: 12,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: amber[300],
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Arial", sans-serif`,
  },
  shape: {
    borderRadius: 12,
  },
});

export { darkTheme, lightTheme };

