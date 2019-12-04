import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  SpinnerOverlay,
  AlertBox,
  EventScrollbar
} from "../../components";
import { weatherActions, eventActions } from "../../redux/actions";
import api from "../../api";
import useStyles from "./styles";

export default () => {
  const classes = useStyles();
  let history = useHistory();
  const { cityCode } = useParams();
  const location = useLocation();
  const isLoading = useSelector(state => state.weather.isLoading);
  const weather = useSelector(state => state.weather.currentWeather);
  const event = useSelector(state => state.event.currentEvent);
  const errorMessage = useSelector(state => state.weather.errorMessage);
  const eventErrorMessage = useSelector(state => state.event.errorMessage);
  const dispatch = useDispatch();
  const cityName = useRef(null);
  const countryName = useRef(null);

  function rain(container,svg_path,opts={}){const o={density:1e3,min_duration:3e3,max_duration:5e3,easing:"ease-in",spawnsvg_uncertainty:500,min_rotation:200,max_rotation:1e3,min_size:30,max_size:60,start_color:"#94c3ffff",end_color:"#ffc3fff0",full_screen:true};Object.assign(o,opts);let w,h;if(o.full_screen){w=o.max_size+Math.max(document.documentElement.clientWidth-o.max_size,window.innerWidth-o.max_size||0);h=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)}else{w=container.offsetWidth;h=container.offsetHeight}const subcontainer=document.createElement("div");let css_string=`\n        position: absolute;\n        top: -${o.max_size}px;\n        height: ${o.full_screen?h+o.max_size+"px":"calc(100% + "+o.max_size+"px)"};\n        width: 100%;\n        left: 0px;\n        overflow: hidden;\n        z-index: 1;\n    `;subcontainer.setAttribute("style",css_string);if(!o.full_screen)container.style.position="relative";container.appendChild(subcontainer);const create_svg=()=>{const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");const x=100+Math.floor(Math.random()*w-200);const size=o.min_size+Math.floor(Math.random()*(o.max_size-o.min_size));const duration=o.min_duration+Math.floor(Math.random()*(o.max_duration-o.min_duration));const duration_css=(duration/1e3).toFixed(1)+"s";const spawn_random=Math.floor(Math.random()*o.spawnsvg_uncertainty);const rotation=o.min_rotation+Math.floor(Math.random()*(o.max_rotation-o.min_rotation));console.log(`new svg; duration_css is ${duration}; x is ${x}; spawntime is ${spawn_random}, rotation is ${rotation}degs`);css_string=`\n            position: absolute;\n            top: 0px;\n            width: ${size}px;\n            left: ${x}px;\n            height: ${size}px;\n            z-index: 1;\n            background-color: ${o.start_color};\n            -webkit-mask-image: url(${svg_path});\n            mask-image: url(${svg_path});\n            mask-repeat: no-repeat;\n            -webkit-mask-repeat: no-repeat;\n            mask-size: 100% 100%;\n            -webkit-mask-size: 100% 100%;\n            transition: all ${duration_css} ${o.easing};\n            -webkit-transition: all ${duration_css} ${o.easing};\n        `;svg.setAttribute("width","100");svg.setAttribute("height","100");svg.setAttribute("fill","red");svg.setAttribute("style",css_string);setTimeout(()=>svg.parentNode.removeChild(svg),spawn_random+duration+500);return{svg:svg,spawn_random:spawn_random,rotation:rotation}};setInterval(()=>{const svg=create_svg();subcontainer.appendChild(svg.svg);const minus_or_not=!Math.round(Math.random())?"-":"";setTimeout(()=>{svg.svg.style.transform=`translate(0px, ${h+120}px) rotate(${minus_or_not}${svg.rotation}deg)`;svg.svg.style.backgroundColor=o.end_color},100+svg.spawn_random)},1e4/o.density)}



  const getCurrentWeather = () => {
    dispatch(weatherActions.getCurrentWeather(api.getCurrentWeather(cityCode)));
    countryName.current = location.state.countryName;
    cityName.current = location.state.cityName;
  };

  const getCurrentEvent = () => {
    dispatch(
      eventActions.getCurrentEvent(
        api.getCurrentEvent(countryName.current, cityName.current)
      )
    );
    countryName.current = location.state.countryName;
    cityName.current = location.state.cityName;
  };

  useEffect(() => {
    if (!location.state || !location.state.fromDropDown) {
      history.replace("/");
      return;
    }
    getCurrentWeather();
    getCurrentEvent();
  }, [cityCode]);

 
    setTimeout(() => {
      rain(document.getElementById("rain"), weather.map(value => value.weatherIcon)[0], {
          density:                13,             // higher means faster spawn interval
          min_duration:           8000,           // minimum animation duration
          max_duration:           11000,          // minimum animation duration
          easing:                 'ease-in',       // use other easings, e.g. 'cubic-bezier(.57,.01,.87,.77)'
          spawnsvg_uncertainty:   500,            // raise to make spawn intervals seem more random
          min_rotation:           200,            // minimum rotation (deg) during full animation cycle
          max_rotation:           400,            // maximum rotation (deg) during full animation cycle
          min_size:               20,             // minimum svg size in pixels
          max_size:               96,             // maximum svg size in pixels
          start_color:            'rgb(93,144,182)',    // start animation color, follows same easing
          end_color:              '#f7f7f7',    // end animation color
          full_screen:            true           // override container size and use full documentElement boundaries
      });
      
    }, 1100);
    

  return (
    <div className={classes.container}>
   
      {isLoading ? (
        <SpinnerOverlay />
      ) : !errorMessage ? (
        <div>
          <Card weather={weather} cityName={cityName.current} />
          <br></br>
          {!eventErrorMessage ? (
            <EventScrollbar event={event} cityName={cityName.current} />
          ) : (
            <div>
              <p className={classes.error}>{eventErrorMessage}</p>
            </div>
          )}
          <br></br>
         
        </div>
      ) : (
        <AlertBox errorMessage={errorMessage} action="Go to map" />
      )}
      <div id="rain"style={{zIndex: -1}}></div>
    </div>
    
  );
};
