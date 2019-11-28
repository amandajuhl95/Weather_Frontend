import axios from "axios"

export const setBaseURL = url => {
  axios.defaults.baseURL = url
}

export const getCountry = (countryList, countryName) => {
  return countryList.filter(country => country.name === countryName)[0]
}

export const getCityName = (cityList, cityCode) => {
  return cityList.filter(city => city.cityCode === parseInt(cityCode))[0].name
}
