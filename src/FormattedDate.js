import React from "react";

export default function FormattedDate(props) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = props.date.getDate();
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  return (
    <div>
      {day} {month} {year}
    </div>
  );
}
