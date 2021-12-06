import axios from "axios";
import { weatherUrl } from "../utils/urls";
import { handleResult } from "./Service";

export const fetchWeatherData = async () => {
  let result = await axios.get(weatherUrl);
  return handleResult(result);
};
