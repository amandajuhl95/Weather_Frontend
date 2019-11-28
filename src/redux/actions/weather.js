const getCurrentWeather = promise => ({
  type: "GET_CURRENT_WEATHER",
  payload: promise
})

const getSpecificWeather = promise => ({
  type: "GET_SPECIFIC_WEATHER",
  payload: promise
})

export default {
  getCurrentWeather,
  getSpecificWeather
}
