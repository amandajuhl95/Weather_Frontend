import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core"

export default ({ errorMessage, action }) => {
  const [open, setOpen] = useState(true)
  let history = useHistory()

  const handleActionClick = () => {
    setOpen(false)
    if (action === "Go to map") {
      history.replace("/")
    }
  }

  useEffect(() => {
    setOpen(true)
  }, [errorMessage, action])

  return (
    <Dialog open={open}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>{errorMessage}</DialogContentText>
        <DialogActions>
          <Button onClick={handleActionClick} color="primary">
            {action}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}
