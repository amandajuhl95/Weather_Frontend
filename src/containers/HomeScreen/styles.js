import { makeStyles } from "@material-ui/core/styles"

import { Colors } from "../../themes"

export default makeStyles(theme => ({
  container: {
    position: "relative",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mapBackground
  },
  mapContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: Colors.mapBackground
  }
}))
