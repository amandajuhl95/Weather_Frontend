import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 300;

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  button: {
    marginTop: theme.spacing(2)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  autoComplete: {
    marginTop: theme.spacing(2),
    width: "100%"
  },
  calendar: {
    marginTop: theme.spacing(2)
  },

  inputRoot: {
    flexWrap: "unset"
  }
}));
