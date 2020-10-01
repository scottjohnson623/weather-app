import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
export default function Form() {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();
  //todo- add input scrubbing / verification / error handling
  async function getWeather() {
    //toggle submitted and loading
    dispatch({ type: "SUBMITTED" });
    dispatch({ type: "TOGGLE_LOADING" });
    let locationdata = await axios.get(`/api/weather/${input}`);
    console.log(locationdata.data);
    dispatch({ type: "SET_DATA", payload: locationdata.data });
    dispatch({ type: "TOGGLE_LOADING" });
  }
  return (
    <div className="input">
      <input
        className="textinput"
        placeholder="Enter 7-digit postcode here, e.x. '1710052' or '171-0052'"
        onChange={(e) => {
          dispatch({ type: "SET_INPUT", payload: e.target.value });
        }}
      />
      <button className="inputbutton btn btn-light-blue" onClick={getWeather}>
        Submit
      </button>
    </div>
  );
}
