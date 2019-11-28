import React, { useEffect, useRef } from "react"
import { useParams, useLocation, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { Card, SpinnerOverlay, AlertBox } from "../../components"
import { weatherActions } from "../../redux/actions"
import api from "../../api"
import useStyles from "./styles"

export default () => {
  const classes = useStyles()
  let history = useHistory()
  const { cityCode } = useParams()
  const location = useLocation()
  const isLoading = useSelector(state => state.weather.isLoading)
  const weather = useSelector(state => state.weather.currentWeather)
  const errorMessage = useSelector(state => state.weather.errorMessage)
  const dispatch = useDispatch()
  const cityName = useRef(null)

  const getCurrentWeather = () => {
    dispatch(weatherActions.getCurrentWeather(api.getCurrentWeather(cityCode)))

    cityName.current = location.state.cityName
  }

  useEffect(() => {
    if (!location.state || !location.state.fromDropDown) {
      history.replace("/")
      return
    }
    getCurrentWeather()
  }, [cityCode])

  return (
    <div className={classes.container}>
      {isLoading ? (
        <SpinnerOverlay />
      ) : !errorMessage ? (
        <Card weather={weather} cityName={cityName.current} />
      ) : (
        <AlertBox errorMessage={errorMessage} action="Go to map" />
      )}
    </div>
  )
}
