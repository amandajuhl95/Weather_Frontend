import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import { NavBar } from "../../components"
import HomeScreen from "../HomeScreen"
import CurrentWeatherScreen from "../CurrentWeatherScreen"
import SpecificWeatherScreen from "../SpecificWeatherScreen"

import useStyles from "./styles"

import { geographyActions } from "../../redux/actions"
import api from "../../api"

export default () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(geographyActions.getCountry(api.getCountry()))
  }, [dispatch])

  return (
    <React.Fragment>
      <div className={classes.container}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route
            path="/weather/city/:cityCode"
            exact
            component={CurrentWeatherScreen}
          />
          <Route
            path="/weather/city/:cityCode/:year/:month/:day"
            exact
            component={SpecificWeatherScreen}
          />
          <Route component={HomeScreen} />
        </Switch>
      </div>
    </React.Fragment>
  )
}
