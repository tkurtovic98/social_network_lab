import React, { useState } from "react";
import CityView from "./CityView";
import { makeCity } from "../../models/weather/CityDataModel";
import { fetchWeatherData } from "../../api/service/WeatherService";

export const WeatherContainer = () => {
  const [cityData, setCityData] = useState(null);

  const handleWeatherClick = async () => {
    if (!cityData) {
      let result = await fetchWeatherData();
      setCityData(makeCity(result));
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleWeatherClick();
        }}
      >
        Weather
      </button>
      {cityData && <CityView model={cityData} />}
    </div>
  );
};
