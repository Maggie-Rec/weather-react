import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      imgUrl: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "dd0d0c42b74af337c94f4b209acc8d4f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (WeatherData.ready) {
    return (
      <div className="container">
        <div className="weatherAppWrapper">
          <div className="weatherApp">
            <form id="search-engine" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    id="search-city"
                    placeholder="Search the city.."
                    className="form-control"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    className="btn btn-secondary"
                    value="Search!"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={WeatherData} />
            <WeatherForecast coordinates={WeatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
