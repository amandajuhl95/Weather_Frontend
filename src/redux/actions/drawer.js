const setCountry = country => ({
  type: "SET_COUNTRY",
  country
})

const setVisible = visible => ({
  type: "SET_VISIBLE",
  visible
})

export default {
  setCountry,
  setVisible
}
