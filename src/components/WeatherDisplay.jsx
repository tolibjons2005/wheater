import weatherCodes from '../utils/weatherCodes';

const WeatherDisplay = ({ weatherData, cityName, country }) => {
  if (!weatherData) {
    return null;
  }

  const { temperature, humidity, windSpeed, weatherCode } = weatherData;
  const weatherInfo = weatherCodes[weatherCode] || { label: 'Unknown', icon: '❓' };

  return (
    <div className="weather-display">
      <div className="location-info">
        <h2 className="city-name">{cityName}</h2>
        <span className="country">{country}</span>
      </div>

      <div className="weather-main">
        <div className="weather-icon">{weatherInfo.icon}</div>
        <div className="temperature">{temperature}°C</div>
        <div className="condition">{weatherInfo.label}</div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
