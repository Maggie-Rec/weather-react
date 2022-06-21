import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [WeatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setReady(true);

    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
    });
  }

  if (ready) {
    let appData = {
      day: "Tuesday",
      date: "14/05/2022",

      imgUrl: "http://openweathermap.org/img/wn/01d.png",
      time: "15:05",
    };
    return (
      <div className="container">
        <div className="weatherAppWrapper">
          <div class="weatherApp">
            <form id="search-engine">
              <div class="row">
                <div class="col-6">
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
                <div class="col-3">
                  <button type="button" class="btn btn-info currentLocation">
                    My current location
                  </button>
                </div>
              </div>
            </form>
            <div className="inside">
              <div className="row top-row">
                <div className="col-6">
                  <img
                    className="wind-icon float-start"
                    src={appData.imgUrl}
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
                      <li>
                        <div>{WeatherData.description}</div>
                      </li>
                      <li>
                        max. <span id="highTemp"></span>°C
                      </li>
                      <li>
                        min. <span id="lowTemp"></span>°C
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row time-date-row">
                    <div className="col-8">
                      <ul className="dateTime">
                        <li>{appData.day}</li>
                        <li>{appData.date}</li>
                        <br />
                        <span className="stats">
                          <li>Humidity: {WeatherData.humidity}%</li>
                          <li>Wind: {WeatherData.wind}km/h</li>
                          <li>Pressure: {WeatherData.pressure}hPa</li>
                        </span>
                      </ul>
                    </div>
                    <div className="col-4 float-end time" id="time">
                      {appData.time}
                    </div>
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
    let city = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
