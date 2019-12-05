import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1000
  },
  title: {
    fontWeight: "bold",
    flexGrow: 1,
    fontSize: 28,
    fontFamily: "'Roboto', sans-serif"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  offset: theme.mixins.toolbar
}));
