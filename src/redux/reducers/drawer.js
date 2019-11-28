const initialState = {
  country: null,
  isOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        ...state,
        country: action.country
      }
    case "SET_VISIBLE":
      return {
        ...state,
        isOpen: action.visible
      }
    default:
      return state
  }
}
