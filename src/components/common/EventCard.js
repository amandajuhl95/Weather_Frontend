import React from "react";
import {
  Typography,
  Paper,
  GridListTile,
  GridList,
  Box
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { Colors } from "../../themes";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "80%",
    maxWidth: 1000
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    padding: theme.spacing(1)
  },
  text: {
    color: Colors.white,
    fontWeight: "bold"
  },
  dateTime: {
    color: Colors.white,
    backgroundColor: Colors.lightBlue
  },
  box: {
    height: "100%"
  },
  weatherBox: {
    backgroundColor: Colors.middleBlue,
    marginTop: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
}));

export default ({ event, cityName }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <GridList cols={event.length} cellHeight={"auto"}>
        <GridListTile cols={event.length}>
          <Box style={{ backgroundColor: Colors.darkBlue }}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              className={classes.title}
            >
              {cityName}
            </Typography>
          </Box>
        </GridListTile>
        {event.map((value, index) => {
          return (
            <GridListTile cols={1} key={index} component="div">
              <Box
                className={classes.box}
                display="flex"
                flexDirection="column"
              >
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.dateTime}
                >
                  {value.eventDate}
                </Typography>
                <Box flex={1} className={classes.weatherBox}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.text}
                  >
                    {value.eventName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.text}
                  >
                    Address: {value.eventAddress}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.text}
                  >
                    <a href={value.eventURL}>Buy ticket here</a>
                  </Typography>
                </Box>
              </Box>
            </GridListTile>
          );
        })}
      </GridList>
    </Paper>
  );
};
