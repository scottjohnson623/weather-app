import React from "react";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import Results from "./components/Results";
import "./styles/App.css";
import "./styles/spinner.css";

function App() {
  //importing state
  const loading = useSelector((state) => state.loading);
  return (
    <div className="App">
      <span className="logo">What's the Weather?</span>
      <br />
      <Form />
      {loading ? <div className="loader"></div> : <Results />}
    </div>
  );
}

export default App;
