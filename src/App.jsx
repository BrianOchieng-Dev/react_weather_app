import { useState } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import './App.css'

function App(){
    const[city, setCity] = useState("")
    const[weather, setWeather] = useState(null)//no weather data has been loaded yet.
    const[loading, setLoading] = useState(false)//display the data and if true, hide the fetched data and display the spinner
    const [error, setError] = useState("");

    const API_KEY = "7906e9ee676dd82d46d66758070cb344"

     const fetchWeather = async () => {
        try{
                setLoading(true) //alow for the loading spinner to be displayed 
                setError("") //clear any previous error message
                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
                );
                setWeather(res.data)
        }
        catch (error){
      console.error("Error fetching weather data:", error);
      setError("City not found or network error.");
    } finally {
      setLoading(false);
    }
     };
     return (
        <div className="app-container">
    <div className="content">
        <div className="back">
      <h1 className="head">Weather App</h1>
      <SearchBox city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {loading && <p className="text-blue-700 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
    </div>
  );
}

export default App;