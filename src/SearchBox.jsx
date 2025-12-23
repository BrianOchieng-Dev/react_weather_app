import './Search.css'

function SearchBox({ city, setCity, fetchWeather }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="inputbox"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
