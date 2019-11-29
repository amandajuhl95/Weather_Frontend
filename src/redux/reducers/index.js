import { combineReducers } from "redux";

import geography from "./geography";
import weather from "./weather";
import drawer from "./drawer";
import event from "./event";

export default combineReducers({ geography, weather, drawer, event });
