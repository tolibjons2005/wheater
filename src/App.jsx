import { useState } from 'react';
import { initTelegramSDK } from './utils/telegramSDK';
import { getWeather } from './services/weatherService';
import CitySearch from './components/CitySearch';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  initTelegramSDK();

  const handleCitySelect = async (city) => {
    setLoading(true);
    setError(null);
    setSelectedCity(city);

    try {
      const data = await getWeather(city.latitude, city.longitude);
      setWeatherData(data);
    } catch {
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Weather App</h1>
        <p>Search for a city to see the weather</p>
      </header>

      <CitySearch onCitySelect={handleCitySelect} selectedCity={selectedCity} />

      {loading && <LoadingSpinner />}

      {error && <div className="error-message">{error}</div>}

      {weatherData && selectedCity && !loading && (
        <WeatherDisplay
          weatherData={weatherData}
          cityName={selectedCity.name}
          country={selectedCity.country}
        />
      )}

      {!loading && !weatherData && !error && (
        <div className="empty-state">
          <div className="empty-state-icon">🌍</div>
          <p className="empty-state-text">Enter a city name to get started</p>
        </div>
      )}
    </div>
  );
}

export default App;
