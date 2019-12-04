import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1000
  },
  title: {
    fontWeight: "bold",
    //align: "center",
    //flexGrow: 1,
    paddingLeft: "33%",
    fontSize: 28,
    fontFamily: "'Roboto', sans-serif"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  offset: theme.mixins.toolbar
}));
