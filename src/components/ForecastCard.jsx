import React from "react";
import date from "date-and-time";
export default function ForecastCard(props) {
  return (
    <div className="card">
      <img src={props.data.day.condition.icon} />
      <div className="spacebetween">
        <span> {props.data.date} </span>
        <span>{date.transform(props.data.date, "YYYY-MM-DD", "ddd")}</span>
      </div>
      {props.data.day.condition.text} <br />
      <div className="spacebetween">
        <span>Max: {Math.round(props.data.day.maxtemp_c)} °C </span>
        <span>
          Min:
          {Math.round(props.data.day.mintemp_c)} °C
        </span>
      </div>
    </div>
  );
}
