require("dotenv").config;
const fetch = require("node-fetch");
const weather = require("../../db/dao/weather/WeatherDao");
const City = require("../../structs/City");

const options = { method: "GET" };
const weatherUrl = (cityName) => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}`;
};

const fetchWeatherInfo = async (cityName) => {
  let storedCity = await weather.findOne(cityName);

  if (storedCity) {
    return storedCity;
  }

  let cityUrl = weatherUrl(cityName);

  return fetch(cityUrl, options)
    .then((response) => response.json())
    .then(async (response) => {
      console.log(response);
      await weather.createWeather(
        new City(response.name, response.coord, response.sys.country, {
          temp: response.main.temp,
          temp_min: response.main.temp_min,
          temp_max: response.main.temp_max,
          pressure: response.main.pressure,
          humidity: response.main.humidity,
        })
      );

      return await weather.findOne(cityName);
    })
    .catch((err) => "Error");
};

module.exports = fetchWeatherInfo;
