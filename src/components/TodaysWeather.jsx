import React from "react";
import { useSelector } from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import date from "date-and-time";

export default function TodaysWeather() {
  const forecast = useSelector((state) => state.forecast);

  return (
    <div>
      Weather for today,{" "}
      {date.transform(
        forecast[0].hour[0].time,
        "YYYY-MM-DD HH:mm",
        "MMM DD, YYYY"
      )}
      <MDBTable className="weathertable">
        <MDBTableHead>
          <tr>
            <th>Time</th>
            <th>Temperature</th>
            <th>Weather</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {forecast[0].hour.map((elem, i) => {
            if (i % 3 === 0) {
              return (
                <tr key={i}>
                  <th>
                    {date.transform(elem.time, "YYYY-MM-DD HH:mm", "HH:mm")}
                  </th>
                  <th>{elem.temp_c} °C</th>
                  <th>
                    <img
                      alt="weather"
                      className="tableimg"
                      src={elem.condition.icon}
                    />
                  </th>
                </tr>
              );
            }
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
