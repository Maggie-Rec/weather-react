import React, { useState } from "react";
import FormattedTime from "./FormattedTime";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
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

  if (WeatherData.ready) {
    return (
      <div className="container">
        <div className="weatherAppWrapper">
          <div class="weatherApp">
            <form id="search-engine">
              <div class="row">
                <div class="col-8">
                  <input
                    type="search"
                    id="search-city"
                    placeholder="Search the city.."
                    class="form-control"
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
            <div className="inside">
              <div className="row top-row">
                <div className="col-7">
                  <img
                    className="wind-icon float-start"
                    src={WeatherData.imgUrl}
                    id="icon"
                    alt="wind icon"
                  />
                  <div id="properties">
                    <ul className="cityList">
                      <li>
                        <div id="units">
                          <strong>{Math.round(WeatherData.temperature)}</strong>
                          <span id="tempCel">°C </span>
                        </div>
                      </li>
                      <li>
                        <span id="change-city">{WeatherData.city}</span>,
                        <span id="country">{WeatherData.country}</span>
                      </li>
                      <li className="text-capitalize">
                        <div>{WeatherData.description}</div>
                      </li>
                      <li>
                        max.{" "}
                        <span id="highTemp">
                          {Math.round(WeatherData.maxTemp)}
                        </span>
                        °C
                      </li>
                      <li>
                        min.{" "}
                        <span id="lowTemp">
                          {Math.round(WeatherData.minTemp)}
                        </span>
                        °C
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-5">
                  <div className="row time-date-row">
                    <div className="col-5">
                      <ul className="dateTime">
                        <li>
                          <FormattedTime date={WeatherData.date} />
                        </li>
                      </ul>
                    </div>
                    <div className="col-7 float-end time" id="time">
                      <FormattedDate date={WeatherData.date} />
                    </div>
                    <br />
                    <span className="stats">
                      <li>Humidity: {WeatherData.humidity}%</li>
                      <li>Wind: {WeatherData.wind}km/h</li>
                      <li>Pressure: {WeatherData.pressure}hPa</li>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h3>Next 6 days:</h3>
            <div className="fiveDays" id="weather-forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f3a2f6fa89402174ee2a085add9c3cd3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
