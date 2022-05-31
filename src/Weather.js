import React from "react";
import "./Weather.css";

export default function Weather() {
  let appData = {
    city: "Madrid",
    country: "Spain",
    temperature: "25",
    day: "Tuesday",
    date: "14/05/2022",
    description: "clear sky",
    humidity: "31",
    wind: "3",
    pressure: "1021",
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
                        <strong>{appData.temperature}</strong>
                        <span id="tempCel">°C </span>
                      </div>
                    </li>
                    <li>
                      <span id="change-city">{appData.city}</span>,
                      <span id="country">{appData.country}</span>
                    </li>
                    <li>
                      <div>{appData.description}</div>
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
                        <li>Humidity: {appData.humidity}%</li>
                        <li>Wind: {appData.wind}km/h</li>
                        <li>Pressure: {appData.pressure}hPa</li>
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
}
