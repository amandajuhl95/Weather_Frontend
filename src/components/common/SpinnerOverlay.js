import React from "react"
import { makeStyles } from "@material-ui/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    zIndex: 3000
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress size={100} />
    </div>
  )
}
