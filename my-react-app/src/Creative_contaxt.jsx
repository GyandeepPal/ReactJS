import { useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const App = () => {
  // AI States
  const [searchData, setSearchData] = useState("");
  const [answer, setAnswer] = useState("");

  // Weather States
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [aqi, setAQI] = useState(null);

  // API Keys
  const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
  const WEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY";

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  // Gemini Search
  const search = async () => {
    if (!searchData) return;

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(searchData);
      const text = result.response.text();

      setAnswer(text);
    } catch (error) {
      console.log(error);
      setAnswer("Something went wrong.");
    }
  };

  // Weather Search
  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      setWeather(data);

      const lat = data.coord.lat;
      const lon = data.coord.lon;

      const aqiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );

      const aqiData = await aqiRes.json();
      setAQI(aqiData.list[0].main.aqi);
    } catch (error) {
      console.log(error);
    }
  };

  const getDirection = (deg) => {
    if (deg >= 337.5 || deg < 22.5) return "North";
    if (deg < 67.5) return "North-East";
    if (deg < 112.5) return "East";
    if (deg < 157.5) return "South-East";
    if (deg < 202.5) return "South";
    if (deg < 247.5) return "South-West";
    if (deg < 292.5) return "West";
    return "North-West";
  };

 return (
  <div className="container">

    {/* Gemini AI */}
    <div className="card">
      <h1>🤖 Gemini AI</h1>

      <input
        type="text"
        placeholder="Ask anything..."
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />

      <button onClick={search}>Search</button>

      <div className="result">
        {answer ? (
          <p>{answer}</p>
        ) : (
          <p>Ask anything to Gemini...</p>
        )}
      </div>
    </div>

    {/* Weather App */}
    <div className="card">
      <h1>🌦 Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      <div className="result">
        {weather ? (
          <>
            <h2>{weather.name}</h2>

            <h3>🌡 Temperature : {weather.main.temp}°C</h3>

            <h3>💧 Humidity : {weather.main.humidity}%</h3>

            <h3>☁ Condition : {weather.weather[0].main}</h3>

            <h3>🌬 Wind Speed : {weather.wind.speed} m/s</h3>

            <h3>💨 Wind Gust : {weather.wind.gust ?? "N/A"} m/s</h3>

            <h3>
              👀 Visibility :
              {weather.visibility >= 10000
                ? " 10+ km"
                : ` ${weather.visibility / 1000} km`}
            </h3>

            <h3>🌧 Rain : {weather.rain?.["1h"] ?? 0} mm</h3>

            <h3>🌫 AQI : {aqi}</h3>
          </>
        ) : (
          <p>Search a city to see weather details.</p>
        )}
      </div>
    </div>

  </div>
);
}
export default App;