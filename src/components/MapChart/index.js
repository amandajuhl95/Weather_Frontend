import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps"
import ReactTooltip from "react-tooltip"

import { drawerActions } from "../../redux/actions"
import { Colors } from "../../themes"
import { getCountry } from "../../utils"
import useStyles from "./styles"

import geographyObject from "./combine2.json"

export default () => {
  const classes = useStyles()
  const countryList = useSelector(state => state.geography.country)
  const dispatch = useDispatch()
  const setCountry = country => {
    dispatch(drawerActions.setCountry(country))
    dispatch(drawerActions.setVisible(true))
  }
  const [content, setContent] = useState("")

  const handleCountryClick = geo => {
    setCountry(getCountry(countryList, geo.properties.name))
  }

  return (
    <React.Fragment>
      <ComposableMap
        data-tip=""
        width={600}
        height={300}
        className={classes.mapContainer}
        projectionConfig={{
          scale: 100,
          rotation: [-11, 0, 0]
        }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geographyObject}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: Colors.mapFill,
                      outline: "none"
                    },
                    hover: {
                      fill: Colors.mapHover,
                      outline: "none"
                    },
                    pressed: {
                      fill: Colors.mapPressed,
                      outline: "none"
                    }
                  }}
                  onMouseEnter={() => setContent(geo.properties.name)}
                  onMouseLeave={() => setContent("")}
                  onClick={() => handleCountryClick(geo)}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip>{content}</ReactTooltip>
    </React.Fragment>
  )
}
