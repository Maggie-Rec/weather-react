import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <li>
          <div id="units">
            <strong>{Math.round(props.celcius)}</strong>
            <span id="tempCel">
              °C |{" "}
              <a href="/" onClick={convertToFahrenheit}>
                °F
              </a>
            </span>
          </div>
        </li>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <li>
          <div id="units">
            <strong>{Math.round(fahrenheit)}</strong>

            <span id="tempCel">
              <a href="/" onClick={convertToCelcius}>
                {" "}
                °C{" "}
              </a>
              | °F
            </span>
          </div>
        </li>
      </div>
    );
  }
}
