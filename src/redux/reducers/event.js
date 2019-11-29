const initialState = {
  currentEvent: [],
  specificEvent: [],
  isLoading: false,
  errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_CURRENT_EVENT_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_CURRENT_EVENT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        currentEvent: action.payload,
        errorMessage: null
      };
    case "GET_CURRENT_EVENT_REJECTED":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
          ? action.payload.data.message
          : "Server not found"
      };
    case "GET_SPECIFIC_EVENT_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_SPECIFIC_EVENT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        specificEvent: action.payload,
        errorMessage: null
      };
    case "GET_SPECIFIC_EVENT_REJECTED":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
          ? action.payload.data.message
          : "Server not found"
      };

    default:
      return state;
  }
};
