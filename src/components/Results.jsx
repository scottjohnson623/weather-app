import React from "react";
import { useSelector } from "react-redux";
import ForecastCard from "./ForecastCard";
import TodaysWeather from "./TodaysWeather";
import Map from "./Map";

export default function Result() {
  const forecast = useSelector((state) => state.forecast);
  const locationName = useSelector((state) => state.locationName);
  return (
    <div className="results">
      <span className="todaysweather">
        <b> {locationName} </b>
      </span>
      <br />
      3-Day Forecast
      <div className="cardwrapper">
        {forecast.map((elem, i) => (
          <ForecastCard key={"card " + i} data={elem} />
        ))}
      </div>
      <div className="bottomwrapper">
        <div className="mapwrapper">
          Map: <br /> <br />
          <Map />
        </div>
        <TodaysWeather />
      </div>
    </div>
  );
}
