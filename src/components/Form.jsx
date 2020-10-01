import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBInput } from "mdbreact";
import axios from "axios";
export default function Form() {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();
  //todo- add input scrubbing / verification / error handling
  async function getWeather() {
    //toggle submitted and loading
    dispatch({ type: "TOGGLE_LOADING" });
    let locationdata = await axios.get(`/api/weather/${input}`);
    console.log(locationdata.data);
    dispatch({ type: "SET_DATA", payload: locationdata.data });
    dispatch({ type: "TOGGLE_LOADING" });
  }
  return (
    <div className="input">
      <input
        placeholder="Enter Zipcode Here"
        onChange={(e) => {
          dispatch({ type: "SET_INPUT", payload: e.target.value });
        }}
      />
      <MDBInput
        placeholder="Enter Zipcode Here"
        onChange={(e) => {
          dispatch({ type: "SET_INPUT", payload: e.target.value });
        }}
        background
        outline
        size="lg"
        className="textinput"
      />
      <button onClick={getWeather}>Submit</button>
    </div>
  );
}
