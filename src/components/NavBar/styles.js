import { makeStyles } from "@material-ui/core/styles";
import { SSL_OP_NO_TLSv1_1 } from "constants";

export default makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1000
  },
  title: {
    fontWeight: "normal",
    fontSize: 40,
    fontFamily: "'Andale Mono', sans- serif",
    marginLeft: 30
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  offset: theme.mixins.toolbar
}));
