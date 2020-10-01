import React from "react";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import ForecastCard from "./components/ForecastCard";
import "./styles/App.css";
import "./styles/spinner.css";

function App() {
  //importing state
  const loading = useSelector((state) => state.loading);
  const submitted = useSelector((state) => state.submitted);
  const forecast = useSelector((state) => state.forecast);
  return (
    <div className="App">
      <Form />
      {submitted ? (
        loading ? (
          <div class="loader">Loading...</div>
        ) : (
          <div className="cardwrapper">
            {forecast.map((elem) => (
              <ForecastCard data={elem} />
            ))}
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
