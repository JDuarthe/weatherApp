/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CITY_API_URL: "https://search.reservamos.mx/api/v2/places",
    WEATHER_API_URL: "https://api.openweathermap.org/data/2.5/onecall",
    WEATHER_API_KEY: "a5a47c18197737e8eeca634cd6acb581",
  },
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
