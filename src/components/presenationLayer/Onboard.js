import React from "react";
import CityInput from "../CityInput/CityInput";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

function Onboard() {
  return (
    <div>
      <h1>Weather App</h1>
      <CityInput />
      <WeatherDisplay />
    </div>
  );
}

export default Onboard;
