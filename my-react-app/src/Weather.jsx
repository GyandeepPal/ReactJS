import { useState } from "react";
import "./App.css";

const Wheather = () => {
  const [City, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  
const cities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Bhopal",
  "Indore"
];
  const API_KEY = "e1c27904a6c435faaf0c74a11641fa97";

  const getWeather = async () => {
    if (!City) {
      return;
    }

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div id="main">
      <input
        type="text"
        placeholder="Enter your city"
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && weather.main && (
        <div className="weather-card">
          <h2>{weather.bhopal}</h2>
          <h3>{weather.main.temp}°C</h3>
          <p>{weather.weather[0].main}</p>
        </div>
      )}
      
    </div>
  );
};

export default Wheather;  