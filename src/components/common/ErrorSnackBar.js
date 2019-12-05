import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toast: {
    position: "absolute"
  },
  toastContent: {
    backgroundColor: "rgba(44, 84, 123, 0.8)"
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

export default () => {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgba(44, 84, 123, 0.8)",
        contrastText: "#fff"
      },
      secondary: {
        main: "#fff"
      }
    }
  });

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
        autoHideDuration={15000}
        className={classes.toast}
      >
        <SnackbarContent
          className={classes.toastContent}
          message={
            <span align="center" className={classes.message}>
              Hello! <br />
              Click on a country on the map <br />
              and get a weather forcast
            </span>
          }
          action={[
            <IconButton key="close" aria-label="close" onClick={handleClose}>
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]}
        />
      </Snackbar>
    </ThemeProvider>
  );
};
