import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      day: "Tuesday",
      date: new Date(response.data.dt * 1000),
      time: "15:05",
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function search() {
    const apiKey = "f3a2f6fa89402174ee2a085add9c3cd3";
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
          <div class="weatherApp">
            <form id="search-engine" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-8">
                  <input
                    type="search"
                    id="search-city"
                    placeholder="Search the city.."
                    class="form-control"
                    onChange={handleCityChange}
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    class="btn btn-secondary"
                    value="Search!"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={WeatherData} />

            <h3>Next 6 days:</h3>
            <div className="fiveDays" id="weather-forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
