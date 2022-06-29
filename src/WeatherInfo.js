import React from "react";
import FormattedTime from "./FormattedTime";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="inside">
      <div className="row top-row">
        <div className="col-7">
          <img
            className="wind-icon float-start"
            src={props.data.imgUrl}
            id="icon"
            alt="wind icon"
          />
          <div id="properties">
            <ul className="cityList">
              <WeatherTemperature celcius={props.data.temperature} />

              <li>
                <span id="change-city">{props.data.city}</span>,
                <span id="country">{props.data.country}</span>
              </li>
              <li className="text-capitalize">
                <div>{props.data.description}</div>
              </li>
              <li>
                max. <span id="highTemp">{Math.round(props.data.maxTemp)}</span>
                °C
              </li>
              <li>
                min. <span id="lowTemp">{Math.round(props.data.minTemp)}</span>
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
                  <FormattedTime date={props.data.date} />
                </li>
              </ul>
            </div>
            <div className="col-7 float-end time" id="time">
              <FormattedDate date={props.data.date} />
            </div>
            <br />
            <span className="stats">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
              <li>Pressure: {props.data.pressure}hPa</li>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
