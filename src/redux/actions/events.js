const getCurrentEvent = promise => ({
  type: "GET_CURRENT_EVENT",
  payload: promise
});

const getSpecificEvent = promise => ({
  type: "GET_SPECIFIC_EVENT",
  payload: promise
});

export default {
  getCurrentEvent,
  getSpecificEvent
};
