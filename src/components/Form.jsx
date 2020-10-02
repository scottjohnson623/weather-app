import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
export default function Form() {
  const input = useSelector((state) => state.input);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  //todo- add input scrubbing / verification / error handling
  async function getWeather() {
    if (input.length !== 7 && input.length !== 8) {
      dispatch({ type: "THROW_ERROR" });
    } else {
      //toggle submitted and loading
      dispatch({ type: "CLEAR_ERROR" });
      dispatch({ type: "SUBMITTED" });
      dispatch({ type: "TOGGLE_LOADING" });
      let locationdata = await axios.get(`/api/weather/${input}`);
      console.log(locationdata);
      if (locationdata.status === 204) {
        console.log("throwing error");
        dispatch({ type: "THROW_ERROR" });
        dispatch({ type: "TOGGLE_LOADING" });
      } else {
        dispatch({ type: "SET_DATA", payload: locationdata.data });
        dispatch({ type: "TOGGLE_LOADING" });
      }
    }
  }
  return (
    <>
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
      {error ? (
        <p className="error"> Please check your input and try again. </p>
      ) : (
        <></>
      )}
    </>
  );
}
