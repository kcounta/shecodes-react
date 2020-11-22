import React from "react";
import "./Weather.css";
import axios from "axios";
import Loader from 'react-loader-spinner';


export default function Weather(props){

    function getWeather(response){
            console.log(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }

    let apiURL = "https://api.openweathermap.org/data/2.5/weather";
    let apiKEY = "2c7be81cdfd4348e785209fd2490e8d1";
    axios
      .get(`${apiURL}?q=${props.city}&units=metric&appid=${apiKEY}&units=metric`)
      .then(getWeather);


    return (
    <div className="Weather-Container">
    <h2>Loading&hellip;</h2>
    <Loader
         type="Circles"
         color="#00BFFF"
         height={100}
         width={100}
    />
    </div>
    );
}