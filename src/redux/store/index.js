import { createStore, applyMiddleware, compose } from "redux"
import promiseMiddleware from "redux-promise-middleware"
import rootReducer from "../reducers"

export default createStore(
  rootReducer,
  compose(applyMiddleware(promiseMiddleware))
)
