import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    position: "relative",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  error: {
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "rgb(152, 192, 229)",
    alignItems: "center",

    position: "relative",
    //flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 10,
    fontSize: "1rem",
    fontFamily: "'Roboto', Helvetica, Arial, sans - serif",
    fontWeight: 400
  }
}));
