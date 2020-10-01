import React from "react";
import { useSelector } from "react-redux";
import ForecastCard from "./ForecastCard";
import TodaysWeather from "./TodaysWeather";
import Map from "./Map";

export default function Result() {
  const forecast = useSelector((state) => state.forecast);
  const locationName = useSelector((state) => state.locationName);
  return (
    <div>
      {locationName}
      <br />
      3-Day Forecast
      <div className="cardwrapper">
        {forecast.map((elem) => (
          <ForecastCard data={elem} />
        ))}
      </div>
      <div className="bottomwrapper">
        <Map />
        <TodaysWeather />
      </div>
    </div>
  );
}
