"use client";

import { useState } from "react";

type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
  wind: {
    speed: number;
  };
};

const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity(""); // Clear the input after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-4 w-full max-w-md">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-3 rounded-l-full w-3/4 border-2 border-blue-400 focus:outline-none focus:border-blue-500"
        placeholder="Enter city..."
      />
      <button
        type="submit"
        className="p-3 rounded-r-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

const WeatherCard = ({ data }: { data: WeatherData }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mt-8 text-center">
      <h2 className="text-2xl font-semibold text-blue-600">{data.name}</h2>
      <div className="text-5xl font-bold text-blue-800 mt-2">{Math.round(data.main.temp)}°C</div>
      <div className="text-xl capitalize mt-2 text-gray-500">{data.weather[0].description}</div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-700">
        <div>
          <p className="font-semibold">Feels Like</p>
          <p>{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const res = await fetch(`http://localhost:8000/api/weather?city=${city}`);
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      console.error("Failed to fetch weather data", err);
    }
  };

  return (
    <main className="p-4 min-h-screen bg-base-100">
      <h1 className="text-3xl font-bold text-center mt-8">🌤️ Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
    </main>
  );
}
