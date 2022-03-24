import axios from "axios";

const weatherUrl = process.env.WEATHER_API_URL;
const weatherKey = process.env.WEATHER_API_KEY;

export function getWeather(lat, lon) {
  return axios.get(weatherUrl, {
    params: { appid: weatherKey, lat, lon },
  });
}
