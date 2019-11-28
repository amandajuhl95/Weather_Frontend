import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Snackbar, SnackbarContent } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  toast: {
    position: "absolute"
  },
  toastContent: {
    backgroundColor: theme.palette.error.dark
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}))

export default ({ errorMessage }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
      className={classes.toast}
    >
      <SnackbarContent
        className={classes.toastContent}
        message={<span className={classes.message}>{errorMessage}</span>}
      />
    </Snackbar>
  )
}
