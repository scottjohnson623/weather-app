import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
export default function Form() {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();
  //todo- add input scrubbing / verification / error handling
  async function getWeather() {
    //toggle submitted and loading
    dispatch({ type: "TOGGLE_LOADING" });
    let locationdata = await axios.get(`/api/weather/${input}`);
    dispatch({ type: "SET_DATA", payload: locationdata.data });
    dispatch({ type: "TOGGLE_LOADING" });
  }
  return (
    <>
      <input
        placeholder="Enter Zipcode Here"
        onChange={(e) => {
          dispatch({ type: "SET_INPUT", payload: e.target.value });
        }}
      />
      <button onClick={getWeather}>Submit</button>
    </>
  );
}
