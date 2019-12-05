import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Typography
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Cloud } from "@material-ui/icons";

import { DrawerPanel, ToggleButton } from "../../components";
import { drawerActions } from "../../redux/actions";

import useStyles from "./styles";

export default () => {
  const classes = useStyles();
  let history = useHistory();
  const isOpen = useSelector(state => state.drawer.isOpen);
  const country = useSelector(state => state.drawer.country);
  const dispatch = useDispatch();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgb(44, 84, 123)",
        contrastText: "#fff"
      },
      secondary: {
        main: "#fff"
      }
    }
  });

  const setVisible = visible => {
    dispatch(drawerActions.setVisible(visible));
  };

  const handleToggle = () => {
    setVisible(!isOpen);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleGlobalClick = () => {
    setVisible(false);
    history.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="fixed"
          theme={theme}
          color="primary"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
              aria-label="home"
              onClick={handleGlobalClick}
            >
              <LanguageIcon fontSize="large" />
            </IconButton>
            <ToggleButton
              handleToggle={handleToggle}
              isOpen={isOpen}
              color="primary"
            />
            <Typography variant="h5" align="center" className={classes.title}>
              Weather Cloud <Cloud />
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
        <DrawerPanel
          isOpen={isOpen}
          handleClose={handleClose}
          defaultCountry={country}
        />
      </React.Fragment>
    </ThemeProvider>
  );
};
