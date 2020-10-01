import React from "react";
import { useSelector } from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import date from "date-and-time";

export default function TodaysWeather() {
  const forecast = useSelector((state) => state.forecast);

  return (
    <div>
      Today's Weather:
      <MDBTable className="weathertable">
        <MDBTableHead>
          <tr>
            <th>Time</th>
            <th>Temp</th>
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
                  <th>{elem.temp_c}</th>
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
