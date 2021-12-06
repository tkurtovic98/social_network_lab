const dao = require("../dao");
const collectionName = "weather";

const createWeather = (weatherDto) => {
  return dao.upsertOrFind(collectionName, weatherDto);
};

const findOne = async (cityName) => {
  return dao.findOne(collectionName, cityName);
};

module.exports = { createWeather, findOne };
