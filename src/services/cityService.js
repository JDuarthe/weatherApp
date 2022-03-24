import axios from "axios";

const cityURL = process.env.CITY_API_URL;

export function getCity(cityName) {
  return axios.get(cityURL, {
    params: { q: cityName },
  });
}
