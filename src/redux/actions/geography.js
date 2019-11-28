const getCountry = promise => ({
  type: "GET_COUNTRY",
  payload: promise
})

const getCity = promise => ({
  type: "GET_CITY",
  payload: promise
})

export default {
  getCountry,
  getCity
}
