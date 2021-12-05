require("dotenv").config;
const fetch = require("node-fetch");

const fetchWeatherInfo = async (cityName) => {
  let res = await
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  )

  if(res.ok) {
    return await res.json()
  } else {
    return "Error"
  }
};

module.exports = { fetchWeatherInfo };
