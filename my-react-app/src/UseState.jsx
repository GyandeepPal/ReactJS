import React, { useState } from 'react'


const UseState = () => {
    const [City,setCity]=useState("")
    const [weather, setWeather] = useState(null)
    const API_KEY="e1c27904a6c435faaf0c74a11641fa97"

    const getWeather= async()=>{
       if(!City){
        return
       }try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`
    );
    let data = await res.json();
    setWeather(data);
}catch(error){
    console.log(error);
    

}

    }
  return (
    <div>
        <h1>Get Wheather</h1>
    <input type="text" 
    placeholder='Enter The City'
    onChange={(e)=>setCity(e.target.value)}
    />


    <button onClick={(getWeather)}>search</button>

{weather && weather.cod === 200 && (
  <div>
    <h3>{weather.name}</h3>
    <p> Temp: {weather.main.temp} °C</p>
    <p> Weather: {weather.weather[0].main}</p>
    <p> Wind: {weather.wind.speed} m/s</p>
  </div>
)}
 
    </div>
  )
}

export default UseState