import React from "react";
import "./Weather.css";

export default function FormattedTime(props) {
  let WeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let WeekDay = WeekDays[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <ul>
      <li>
        <div>{WeekDay}</div>
      </li>
      <li>
        <div>
          {hours}:{minutes}
        </div>
      </li>
    </ul>
  );
}
