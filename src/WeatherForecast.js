import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <h3>Next 6 days:</h3>
        <div className="row">
          <div className="col">
            {" "}
            <div className="WeatherForecast-day"> Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temp-max">
                {forecast[0].temp.max}°
              </span>
              <span className="WeatherForecast-temp-min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "dd0d0c42b74af337c94f4b209acc8d4f";
    let long = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
