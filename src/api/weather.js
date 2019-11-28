import axios from "axios"

export const getCurrentWeather = cityCode => {
  return new Promise((resolve, reject) => {
    axios
      .get(`weather/city/${cityCode}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err.response))
  })
}

export const getSpecificWeather = (cityCode, year, month, day) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/weather/city/${cityCode}/${year}/${month}/${day}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err.response))
  })
}
