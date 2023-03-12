import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "./layout/AppBar";
import "./App.css";
import ToolBar from "./layout/ToolBar";
import GridContainer from "./layout/GridContainer";
import CoordinateToolTip from "./components/CoordinateToolTip";
import MouseToolTip from "./components/MouseToolTip";
import { isMobile } from "react-device-detect";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#24292E",
      },
    },
  });

  React.useEffect(() => {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      setTimeout(() => {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 2000);
      }, 3000);
    }
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {!isMobile ? (
          <>
            <Grid container>
              <Grid item xs={12}>
                <AppBar />
              </Grid>

              <Grid item>
                <ToolBar />
              </Grid>

              <Grid
                item
                xs
                style={{ height: "calc(100vh - 64px)", overflow: "scroll" }}
              >
                <GridContainer />
              </Grid>
            </Grid>

            <CoordinateToolTip />
            <MouseToolTip />
          </>
        ) : (
          <div style={{ position: "fixed", top: "30%", width: "100vw" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/*<img width="112" height="112" src={logo} />*/}
            </div>
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
