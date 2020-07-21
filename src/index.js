import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2176ae",
    },
    secondary: {
      main: "#fe6847",
    },
  },
  typography: {
    fontFamily: ["Lato", "sans serif"],
  },
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: "#000000",
      },
    },
  },
  // overrides: {
  //   MuiToolbar: {
  //     root: {
  //       backgroundColor: "#88c7d0",
  //     },
  //   },
  //   MuiTypography: {
  //     h2: {
  //       color: "#e37656",
  //     },
  //   },
  // },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
