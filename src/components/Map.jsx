import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { useSelector } from "react-redux";

const MyMap = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  ></GoogleMap>
));

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
