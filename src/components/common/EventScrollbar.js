import React from "react";
import { Typography, Paper, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { Colors } from "../../themes";

const useStyles = makeStyles(theme => ({
  eventDiv: {
    overflow: "scroll",
    overflowY: "hidden",
    flexWrap: "nowrap",
    display: "flex",
    overflowX: "auto",
    maxWidth: 1000,
    width: "100%"
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    maxWidth: 1000
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    padding: theme.spacing(1)
  },
  text: {
    color: Colors.white
  },
  eventName: {
    color: Colors.white,
    fontWeight: "bold"
  },
  dateTime: {
    color: Colors.white,
    backgroundColor: Colors.lightBlue
  },

  eventBox: {
    backgroundColor: Colors.middleBlue,
    marginTop: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flex: "0 0 auto",
    display: "inline-block",
    textAlign: "center",
    marginLeft: 1
  },
  dateBox: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    flex: "0 0 auto",
    display: "inline-block",
    textAlign: "center"
  },

  button: {
    display: "inline-block",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    border: "0.16em solid #FFFFFF",
    margin: 5,
    marginTop: 15,
    boxSizing: "border-box",
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 50,
    fontSize: 10,
    color: "#FFFFFF",
    textAlign: "center",
    transition: "all 0.15s",

    "&:hover": {
      color: Colors.darkBlue,
      borderColor: Colors.darkBlue
    },

    "&:active": {
      color: "#BBBBBB",
      borderColor: "#BBBBBB"
    }
  }
}));

const EventItem = (value, key) => {
  const classes = useStyles();
  return (
    <Box className={classes.dateBox} display="flex" flexDirection="column">
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.dateTime}
      >
        {value.value.eventDate}
      </Typography>
      <Box flex={1} className={classes.eventBox} key={key}>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.eventName}
        >
          {value.value.eventName}
        </Typography>
        <Typography variant="subtitle1" align="center" className={classes.text}>
          Address: {value.value.eventAddress}
        </Typography>
        <Typography variant="subtitle1" align="center" className={classes.text}>
          <a href={value.value.eventURL} className={classes.button}>
            Buy ticket here
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default ({ event, cityName }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Box style={{ backgroundColor: Colors.darkBlue }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          className={classes.title}
        >
          Events in {cityName}
        </Typography>
      </Box>

      <div className={classes.eventDiv}>
        {event.map((value, index) => {
          return <EventItem value={value} key={index} />;
        })}
      </div>
    </Paper>
  );
};
