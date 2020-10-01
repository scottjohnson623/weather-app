import React from "react";
import date from "date-and-time";
export default function ForecastCard(props) {
  return (
    <div className="card">
      <img
        alt="weather"
        className="cardimg"
        src={props.data.day.condition.icon}
      />
      <div className="spacebetween">
        <span> {props.data.date} </span>
        <span>{date.transform(props.data.date, "YYYY-MM-DD", "ddd")}</span>
      </div>
      <b>{props.data.day.condition.text}</b>
      <div className="spacebetween">
        <span>
          <b>Max:</b> {Math.round(props.data.day.maxtemp_c)} °C{" "}
        </span>
        <span>
          <b>Min:</b> {Math.round(props.data.day.mintemp_c)} °C
        </span>
      </div>
    </div>
  );
}
