const initialState = {
  country: [],
  city: [],
  isCountryLoading: false,
  isCityLoading: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRY_PENDING":
      return {
        ...state,
        isCountryLoading: true
      }
    case "GET_COUNTRY_FULFILLED":
      return {
        ...state,
        isCountryLoading: false,
        country: action.payload,
        errorMessage: null
      }
    case "GET_COUNTRY_REJECTED":
      return {
        ...state,
        isCountryLoading: false,
        errorMessage: action.payload
          ? action.payload.data.message
          : "Server not found"
      }
    case "GET_CITY_PENDING":
      return {
        ...state,
        isCityLoading: true
      }
    case "GET_CITY_FULFILLED":
      return {
        ...state,
        isCityLoading: false,
        city: action.payload,
        errorMessage: null
      }
    case "GET_CITY_REJECTED":
      return {
        ...state,
        isCityLoading: false,
        errorMessage: action.payload
          ? action.payload.data.message
          : "Server not found"
      }
    default:
      return state
  }
}
