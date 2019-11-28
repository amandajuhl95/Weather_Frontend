const initialState = {
  currentWeather: [],
  specificWeather: [],
  isLoading: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CURRENT_WEATHER_PENDING":
      return {
        ...state,
        isLoading: true
      }
    case "GET_CURRENT_WEATHER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        currentWeather: action.payload,
        errorMessage: null
      }
    case "GET_CURRENT_WEATHER_REJECTED":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
          ? action.payload.data.message
          : "Server not found"
      }
    case "GET_SPECIFIC_WEATHER_PENDING":
      return {
        ...state,
        isLoading: true
      }
    case "GET_SPECIFIC_WEATHER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        specificWeather: action.payload,
        errorMessage: null
      }
    case "GET_SPECIFIC_WEATHER_REJECTED":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
          ? action.payload.data.message
          : "Server not found"
      }

    default:
      return state
  }
}
