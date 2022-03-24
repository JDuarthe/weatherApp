import moment from "moment";
import { getCity } from "../services/cityService";
import { getWeather } from "../services/weatherService";

export async function calculateWeather(cityName) {
  const result = await getCity(cityName);
  if (!result.data.length) {
    return "city doesn't exist";
  }
  const city = result.data.filter(
    (item) =>
      item.city_slug ===
      cityName
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
  );
  if (!city.length) {
    return "city doesn't exist";
  }
  const { lat, long } = city[0];
  return (await getWeather(lat, long)).data.daily;
}

export function dataFormatter(data) {
  return data.map((item) => {
    const kelvin = 273.15;
    const date = moment.unix(item.dt).format("MM/DD/YYYY");
    const maxTemp = Math.round(item.temp.max - kelvin);
    const minTemp = Math.round(item.temp.min - kelvin);
    const main = item.weather[0].main;
    const description = item.weather[0].description;
    return {
      date,
      maxTemp,
      minTemp,
      main,
      description,
    };
  });
}
