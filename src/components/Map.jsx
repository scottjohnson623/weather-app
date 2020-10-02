import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { useSelector } from "react-redux";

// withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
const MyMap = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  ></GoogleMap>
));

// We use object destructuring here to shorten our code
export default function Map() {
  const lat = useSelector((state) => state.lat);
  const lng = useSelector((state) => state.lng);
  return (
    <MyMap
      className="test"
      containerElement={<div style={{ width: `28vw`, height: `28vw` }} />}
      mapElement={<div style={{ width: `28vw`, height: `28vw` }} />}
      lng={lng}
      lat={lat}
    />
  );
}
