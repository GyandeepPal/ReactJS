import { useState } from "react";
import "./App.css";

const Wheather = () => {
  const [City, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [aqi, setAQI] = useState(null);
  const API_KEY = "e1c27904a6c435faaf0c74a11641fa97";


  const getWeather = async () => {
  if (!City) return;

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`
    );

    const data = await res.json();

    console.log("Full Data:", data);
    console.log("Visibility:", data.visibility);

    setWeather(data);

    const lat = data.coord.lat;
    const lon = data.coord.lon;

    const aqiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const aqiData = await aqiRes.json();

    setAQI(aqiData.list[0].main.aqi);

  } catch (error) {
    console.log(error);
  }
};

     

  return (
    <div id="main">
      <h1> Weather App</h1>
    {/* <h3>{weather}</h3> */}
      <input
        type="text"
        placeholder="Enter City Name"
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>

          <h3> Temperature: {weather.main.temp}°C</h3>

          <h3> Humidity: {weather.main.humidity}%</h3>

          <h3> Condition: {weather.weather[0].main}</h3>

          <h3>AQI: {aqi} - {["", "Good", "Fair", "Moderate", "Poor", "Very Poor"][aqi]} </h3>

          <h3> Wind Speed: {weather.wind.speed} m/s</h3>
          
        <h3> Visibility: {weather.visibility >= 10000? "10+ km" : `${weather.visibility / 1000} km`}</h3>

        <h3> Wind Gust: {weather.wind.gust} m/s</h3>


        <h3> Wind Direction: {weather.wind.deg}</h3>


        </div>
      )}
    </div>
  );
};

export default Wheather;



