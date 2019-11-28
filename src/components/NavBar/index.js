import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { AppBar, Toolbar, CssBaseline, IconButton } from "@material-ui/core"
import LanguageIcon from "@material-ui/icons/Language"

import { DrawerPanel, ToggleButton } from "../../components"
import { drawerActions } from '../../redux/actions'

import useStyles from "./styles"

export default () => {
  const classes = useStyles()
  let history = useHistory()
  const isOpen = useSelector(state => state.drawer.isOpen)
  const country = useSelector(state => state.drawer.country)
  const dispatch = useDispatch()

  const setVisible = (visible) => {
    dispatch(drawerActions.setVisible(visible))
  }

  const handleToggle = () => {
    setVisible(!isOpen)
  }
  
  const handleClose = () => {
    setVisible(false)
  }

  const handleGlobalClick = () => {
    setVisible(false)
    history.push('/')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="home"
            onClick={handleGlobalClick}
          >
            <LanguageIcon fontSize="large" />
          </IconButton>
          <ToggleButton handleToggle={handleToggle} isOpen={isOpen} />
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <DrawerPanel isOpen={isOpen} handleClose={handleClose} defaultCountry={country} />
    </React.Fragment>
  )
}
