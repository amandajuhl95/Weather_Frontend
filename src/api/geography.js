import axios from "axios"

export const getCountry = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/weather/countries")
      .then(response => resolve(response.data))
      .catch(err => reject(err.response))
  })
}

export const getCity = countryCode => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/weather/country/${countryCode}`)
      .then(response => resolve(response.data))
      .catch(err => reject(err.response))
  })
}
