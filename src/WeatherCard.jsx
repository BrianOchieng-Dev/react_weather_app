import './Weather.css'

function WeatherCard({ weather }) {
  const { name, main, weather: weatherInfo, wind } = weather;
  return (
    <div className="mt-6 bg-white shadow-lg rounded-lg p-6 w-80 text-center">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-lg capitalize">{weatherInfo[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`}
        alt={weatherInfo[0].description}
        className="logo"
      />
      <h3 className="text-3xl font-bold">{main.temp}°C</h3>
      <div className="p-w">
      <p>Humidity: <br></br> {main.humidity}%</p>
      <p>Wind Speed:<br></br> {wind.speed} m/s</p></div>
    </div>
  );
}

export default WeatherCard;
