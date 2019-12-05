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
    width: "100%",
    maxWidth: 1000
  },
  image: {
    width: 150,
    maxWidth: "80%"
  },
  title: {
    color: Colors.white,
    fontFamily: "'Andale Mono', sans- serif",
    fontWeight: "normal",
    fontSize: 40,
    padding: theme.spacing(1)
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
    paddingBottom: 10
  },
  temp: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 15,
    paddingTop: 10
  },
  advice: {
    color: Colors.white,
    paddingTop: 10
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

export default ({ weather, cityName }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <GridList cols={weather.length} cellHeight={"auto"}>
        <GridListTile cols={weather.length}>
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
        {weather.map((value, index) => {
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
                  {/* 01.0{index}.2019 */}
                  {/* {weather[index].dateTime} */}
                  {value.dateTime}
                </Typography>
                <Box flex={1} className={classes.weatherBox}>
                  <Box textAlign="center">
                    <img
                      className={classes.image}
                      alt="sunny"
                      src={value.weatherIcon}
                    />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.temp}
                  >
                    {value.temp.toFixed(2)}ºC
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.text}
                  >
                    Wind direction: {value.windDirection}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.text}
                  >
                    Wind Speed: {value.windSpeed.toFixed(2)} m/s
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.text}
                  >
                    Humidity: {value.humidity}%
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.text}
                  >
                    Predictability: {value.predictability}%
                  </Typography>
                  <Box fontStyle="italic">
                    <Typography
                      variant="subtitle1"
                      align="center"
                      className={classes.advice}
                    >
                      {value.funnyAdvice}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </GridListTile>
          );
        })}
      </GridList>
    </Paper>
  );
};
