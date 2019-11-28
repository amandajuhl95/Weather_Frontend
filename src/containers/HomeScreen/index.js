import React from "react"
import { useSelector } from "react-redux"

import useStyles from "./styles"
import { MapChart, SpinnerOverlay, AlertBox } from "../../components"

export default () => {
  const classes = useStyles()
  const isCountryLoading = useSelector(
    state => state.geography.isCountryLoading
  )
  const errorMessage = useSelector(state => state.geography.errorMessage)

  return (
    <div className={classes.container}>
      {isCountryLoading ? (
        <SpinnerOverlay />
      ) : errorMessage ? (
        <AlertBox errorMessage={errorMessage} action="OK" />
      ) : null}
      <MapChart />
    </div>
  )
}
