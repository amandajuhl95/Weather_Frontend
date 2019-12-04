import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AutoComplete from "@material-ui/lab/AutoComplete";
import {
  Drawer,
  Box,
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";
import Calendar from "react-calendar";
import moment from "moment";

import { geographyActions } from "../../redux/actions";
import api from "../../api";

import useStyles from "./styles";

export default ({ isOpen, handleClose, defaultCountry }) => {
  const [isCountry, setIsCountry] = useState(false);
  const [isCity, setIsCity] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [country, setCountry] = useState(defaultCountry);
  const [city, setCity] = useState(null);
  const [date, setDate] = useState(moment().toDate());
  const classes = useStyles();
  let history = useHistory();

  const countryList = useSelector(state => state.geography.country);
  const isCountryLoading = useSelector(
    state => state.geography.isCountryLoading
  );
  const cityList = useSelector(state => state.geography.city);
  const isCityLoading = useSelector(state => state.geography.isCityLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    initializeState();
  }, [isOpen]);

  useEffect(() => {
    initializeState();
    setCountry(defaultCountry);
  }, [defaultCountry]);

  const getCity = () => {
    dispatch(geographyActions.getCity(api.getCity(country.countryCode)));
  };

  const initializeState = () => {
    setIsCountry(false);
    setIsCity(false);
    setIsDate(false);
    setCountry(null);
    setCity(null);
    setDate(moment().toDate());
  };
  const handleSelectCountry = () => {
    //validation
    if (!country) {
      alert("select country");
      return;
    }

    getCity();
    setIsCountry(true);
  };

  const handleSelectCity = () => {
    //validation
    if (!city) {
      alert("select city");
      return;
    }

    setIsCity(true);
  };

  const handleGetCurrentWeather = () => {
    //currentWeather, initializeState
    initializeState();
    handleClose();
    history.push(`/weather/city/${city.cityCode}`, {
      fromDropDown: "true",
      cityName: city.name,
      countryName: country.name
    });
  };

  const handleChooseDate = () => {
    setIsDate(true);
  };

  const onDateChange = selectedDate => {
    setDate(selectedDate);
  };

  const handleGetSpecificWeather = () => {
    //currentWeather, initializeState
    initializeState();
    handleClose();
    history.push(
      `/weather/city/${city.cityCode}/${date.getFullYear()}/${date.getMonth() +
        1}/${date.getDate()}`,
      { fromDropDown: "true", cityName: city.name, countryName: country.name }
    );
  };

  const onCountryChange = (event, value) => {
    setCountry(value);
    setCity(null);
    setIsCity(false);
    setIsCountry(false);
    setIsDate(false);
  };

  const onCityChange = (event, value) => {
    setCity(value);
    setIsCity(false);
    setIsDate(false);
  };

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      open={isOpen}
      variant="persistent"
    >
      <div className={classes.toolbar}></div>
      <Box
        m={3}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <AutoComplete
          id="combo-select-country"
          className={classes.autoComplete}
          classes={{
            inputRoot: classes.inputRoot
          }}
          options={countryList}
          getOptionLabel={option => option.name}
          loading={isCountryLoading}
          loadingText="Loading countries"
          renderInput={params => (
            <TextField
              {...params}
              label="Select Country"
              variant="outlined"
              fullWidth
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {isCountryLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                )
              }}
            />
          )}
          onChange={onCountryChange}
          value={country}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSelectCountry}
        >
          Select
        </Button>
        {isCountry && (
          <React.Fragment>
            <AutoComplete
              className={classes.autoComplete}
              classes={{
                inputRoot: classes.inputRoot
              }}
              id="combo-select-city"
              options={cityList}
              getOptionLabel={option => option.name}
              loading={isCityLoading}
              loadingText="Loading cities"
              renderInput={params => (
                <TextField
                  {...params}
                  label="Select City"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {isCityLoading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    )
                  }}
                />
              )}
              onChange={onCityChange}
              value={city}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSelectCity}
            >
              Select
            </Button>
          </React.Fragment>
        )}
        {isCity && (
          <React.Fragment>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleGetCurrentWeather}
              disabled={isDate}
            >
              Get weather prognosis
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleChooseDate}
            >
              Choose a date
            </Button>
          </React.Fragment>
        )}
        {isDate && (
          <React.Fragment>
            <Calendar
              color="rgb(93, 144, 182)"
              className={classes.calendar}
              minDate={moment("2013/01/01").toDate()}
              maxDate={moment()
                .add(10, "day")
                .toDate()}
              onChange={onDateChange}
              value={date}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleGetSpecificWeather}
            >
              Get weather prognosis
            </Button>
          </React.Fragment>
        )}
      </Box>
    </Drawer>
  );
};
