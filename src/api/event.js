import axios from "axios";

export const getCurrentEvent = (countryName, cityName) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`weather/events/${countryName}/${cityName}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err.response));
  });
};

export const getSpecificEvent = (countryName, cityName, year, month, day) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/weather/events/${countryName}/${cityName}/${year}/${month}/${day}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err.response));
  });
};
