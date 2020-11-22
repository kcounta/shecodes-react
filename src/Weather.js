import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const [info, setInfo] = useState(false);

  function getInfo(response) {
    setInfo(true);

    setResult({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleForm(event) {
    event.preventDefault();
    let apiURL = "https://api.openweathermap.org/data/2.5/weather";
    let apiKEY = "2c7be81cdfd4348e785209fd2490e8d1";
    axios
      .get(`${apiURL}?q=${city}&units=metric&appid=${apiKEY}&units=metric`)
      .then(getInfo);
  }

  function handleEntry(event) {
    setCity(event.target.value);
  }

  let weatherForm = (
    <form onSubmit={handleForm}>
      <input type="search" onChange={handleEntry} placeholder="Enter a city" />
      <input type="submit" value="Search" />
    </form>
  );

  if (info) {
    return (
      <div className="wrapper">
        {weatherForm}
        <ul>
          <li>Temperature: {Math.round(result.temperature)}°C</li>
          <li className="desc">Description: {result.description}</li>
          <li>Humidity: {result.humidity}%</li>
          <li>Wind: {result.wind} km/h</li>
          <li>
            <img src={result.icon} alt={result.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return weatherForm;
  }
}