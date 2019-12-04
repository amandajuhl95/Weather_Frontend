import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1000
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  offset: theme.mixins.toolbar
}));
