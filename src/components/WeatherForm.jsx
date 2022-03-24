import React, { useState } from "react";
import { calculateWeather, dataFormatter } from "../utils/weatherFunctions";

export const WeatherForm = ({ setTitle, setDays }) => {
  const [cityName, setCityName] = useState();
  const [error, setError] = useState(false);

  const formHandler = async (e) => {
    e.preventDefault();
    if (!cityName) {
      return;
    }

    const weatherDays = await calculateWeather(cityName);

    if (weatherDays === "city doesn't exist") {
      setError(true);
      setTitle("");
      setDays([]);
      return;
    } else {
      setError(false);
    }

    const result = dataFormatter(weatherDays);
    setTitle(cityName);
    setDays(result);
  };

  return (
    <form onSubmit={formHandler} autoComplete="off">
      <div className="form-group d-flex">
        <input
          type="text"
          className="form-control"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="City"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
      {error && <p className="text-danger text-center"> doesn&apos;t exist</p>}
    </form>
  );
};
