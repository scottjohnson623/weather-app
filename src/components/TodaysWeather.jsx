import React from "react";
import { useSelector } from "react-redux";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

export default function TodaysWeather() {
  const forecast = useSelector((state) => state.forecast);

  return (
    <div>
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
            if (i % 3 == 0) {
              return "hi";
            }
          })}
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
