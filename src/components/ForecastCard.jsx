import React from "react";
import date from "date-and-time";
export default function ForecastCard(props) {
  function filterWeatherText(text) {
    if (
      text === "Moderate or heavy snow with thunder" ||
      text === "Patchy light snow with thunder"
    ) {
      return "Snow with thunder";
    }
    if (
      text === "Moderate or heavy rain with thunder" ||
      text === "Patchy light rain with thunder"
    ) {
      return "Rain with thunder";
    }
    if (
      text === "Moderate or heavy showers of ice pellets" ||
      text === "Light showers of ice pellets"
    ) {
      return "Hail";
    }
    if (text === "Moderate or heavy snow showers") {
      return "Moderate to heavy snow";
    }
    if (text === "Moderate or heavy sleet showers") {
      return "Moderate to heavy sleet";
    }
    if (text === "Moderate or heavy rain shower") {
      return "Moderate to heavy rain";
    }
    if (text === "Moderate or heavy freezing rain") {
      return "Freezing rain";
    }
    if (text === "Moderate rain at times") {
      return "Intermittent rain";
    }
    if (text === "Thundery outbreaks possible") {
      return "Thunder possible";
    }
    if (text === "Patchy freezing drizzle possible") {
      return "Freezing drizzle";
    } else {
      return text;
    }
  }
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
      <b>{filterWeatherText(props.data.day.condition.text)}</b>
      <div className="spacebetween">
        <span>High: {Math.round(props.data.day.maxtemp_c)} °C </span>
        <span>Low: {Math.round(props.data.day.mintemp_c)} °C</span>
      </div>
    </div>
  );
}
