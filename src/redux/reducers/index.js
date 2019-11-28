import { combineReducers } from "redux"

import geography from "./geography"
import weather from "./weather"
import drawer from "./drawer"

export default combineReducers({ geography, weather, drawer })
