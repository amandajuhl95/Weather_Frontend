import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import RootContainer from "./containers/RootContainer"
import store from "./redux/store"
import { setBaseURL } from "./utils"

function App() {
  setBaseURL("https://www.ajuhlhansen.dk/WeatherCloud/api")
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
