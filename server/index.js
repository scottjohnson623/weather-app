const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 9000;
require("dotenv").config();

//middleware
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.json());

//serving up react frontpage
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("/api/weather/:postcode", async (req, res) => {
  //getting city name data and latitude and longitude
  let location = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.postcode}&key=${process.env.googleapikey}`
  );
  //if geocoding api doesn't get a result, send 204 status
  if (location.data.results.length === 0) {
    return res.status(204).send();
  }
  location = location.data.results[0];
  const lat = Math.round(location.geometry.location.lat * 10000) / 10000;
  const lng = Math.round(location.geometry.location.lng * 10000) / 10000;

  // getting weather forecast data
  let weather = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.weatherapikey}&q=${lat},${lng}&days=3`
  );
  weather = weather.data;
  return res.send({ location, weather });
});

//starting up the server
(async () => {
  try {
    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
