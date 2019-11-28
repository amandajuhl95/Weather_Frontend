import React from "react"

import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import CloseIcon from "@material-ui/icons/Close"

export default ({ handleToggle, isOpen }) => {
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="close"
        onClick={handleToggle}
      >
        {isOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MoreVertIcon fontSize="large" />
        )}
      </IconButton>
    </div>
  )
}
