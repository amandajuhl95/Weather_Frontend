import React, { useEffect, useRef } from "react"
import { useParams, useHistory, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { weatherActions } from "../../redux/actions"
import api from "../../api"
import useStyles from "./styles"
import { Card, SpinnerOverlay, AlertBox } from "../../components"

export default () => {
  const classes = useStyles()
  let history = useHistory()
  const location = useLocation()
  const { cityCode, year, month, day } = useParams()
  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather.specificWeather)
  const isLoading = useSelector(state => state.weather.isLoading)
  const errorMessage = useSelector(state => state.weather.errorMessage)
  const cityName = useRef(null)

  const getSpecificWeather = () => {
    dispatch(
      weatherActions.getSpecificWeather(
        api.getSpecificWeather(cityCode, year, month, day)
      )
    )
    cityName.current = location.state.cityName
  }

  useEffect(() => {
    if (!location.state || !location.state.fromDropDown) {
      history.replace("/")
      return
    }
    getSpecificWeather()
  }, [cityCode, year, month, day])

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
