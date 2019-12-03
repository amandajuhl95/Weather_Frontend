import React, { useEffect, useRef } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { weatherActions, eventActions } from "../../redux/actions";
import api from "../../api";
import useStyles from "./styles";
import {
  Card,
  SpinnerOverlay,
  AlertBox,
  EventScrollbar
} from "../../components";

export default () => {
  const classes = useStyles();
  let history = useHistory();
  const location = useLocation();
  const { cityCode, year, month, day } = useParams();
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.specificWeather);
  const event = useSelector(state => state.event.specificEvent);
  const isLoading = useSelector(state => state.weather.isLoading);
  const errorMessage = useSelector(state => state.weather.errorMessage);
  const eventErrorMessage = useSelector(state => state.event.errorMessage);
  const cityName = useRef(null);
  const countryName = useRef(null);

  const getSpecificWeather = () => {
    dispatch(
      weatherActions.getSpecificWeather(
        api.getSpecificWeather(cityCode, year, month, day)
      )
    );
    countryName.current = location.state.countryName;
    cityName.current = location.state.cityName;
  };

  const getSpecificEvent = () => {
    dispatch(
      eventActions.getSpecificEvent(
        api.getSpecificEvent(
          countryName.current,
          cityName.current,
          year,
          month,
          day
        )
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
    getSpecificWeather();
    getSpecificEvent();
  }, [cityCode, year, month, day]);

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
            <div className={classes.error}>
              <p>{eventErrorMessage}</p>
            </div>
          )}
          <br></br>
        </div>
      ) : (
        <AlertBox errorMessage={errorMessage} action="Go to map" />
      )}
    </div>
  );
};
