import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  SpinnerOverlay,
  AlertBox,
  EventScrollbar
} from "../../components";
import { weatherActions, eventActions } from "../../redux/actions";
import api from "../../api";
import useStyles from "./styles";

export default () => {
  const classes = useStyles();
  let history = useHistory();
  const { cityCode } = useParams();
  const location = useLocation();
  const isLoading = useSelector(state => state.weather.isLoading);
  const weather = useSelector(state => state.weather.currentWeather);
  const event = useSelector(state => state.event.currentEvent);
  const errorMessage = useSelector(state => state.weather.errorMessage);
  const eventErrorMessage = useSelector(state => state.event.errorMessage);
  const dispatch = useDispatch();
  const cityName = useRef(null);
  const countryName = useRef(null);

  const getCurrentWeather = () => {
    dispatch(weatherActions.getCurrentWeather(api.getCurrentWeather(cityCode)));
    countryName.current = location.state.countryName;
    cityName.current = location.state.cityName;
  };

  const getCurrentEvent = () => {
    dispatch(
      eventActions.getCurrentEvent(
        api.getCurrentEvent(countryName.current, cityName.current)
      )
    );
    countryName.current = location.state.countryName;
    cityName.current = location.state.cityName;
  };

  useEffect(() => {
    if (!location.state || !location.state.fromDropDown) {
      history.replace("/");
      return;
    }
    getCurrentWeather();
    getCurrentEvent();
  }, [cityCode]);

  return (
    <div className={classes.container}>
      {isLoading ? (
        <SpinnerOverlay />
      ) : !errorMessage ? (
        <div>
          <Card weather={weather} cityName={cityName.current} />
          <br></br>
          {!eventErrorMessage ? (
            <EventScrollbar event={event} cityName={cityName.current} />
          ) : (
            <div>{eventErrorMessage}</div>
          )}
          <br></br>
        </div>
      ) : (
        <AlertBox errorMessage={errorMessage} action="Go to map" />
      )}
    </div>
  );
};
