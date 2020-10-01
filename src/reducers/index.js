import { createStore } from "redux";

const initialState = {
  input: "",
  forecast: [],
  locationName: "",
  submitted: false,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //handling input form
    case "SET_INPUT": {
      return { ...state, input: action.payload };
    }
    //parsing fetched data
    case "SET_DATA": {
      const newState = { ...state };
      newState.forecast = action.payload.weather.forecast.forecastday;
      newState.locationName =
        action.payload.location.address_components[1].long_name +
        ", " +
        action.payload.location.address_components[2].long_name +
        ", " +
        action.payload.location.address_components[3].long_name;
      return newState;
    }
    case "SUBMITTED": {
      return { ...state, submitted: true };
    }
    case "TOGGLE_LOADING": {
      return { ...state, loading: !state.loading };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
