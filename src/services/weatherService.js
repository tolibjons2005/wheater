import axios from 'axios';

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';

export const getWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
        temperature_unit: 'celsius',
        wind_speed_unit: 'kmh',
      },
    });

    const { current } = response.data;

    return {
      temperature: Math.round(current.temperature_2m),
      humidity: current.relative_humidity_2m,
      windSpeed: Math.round(current.wind_speed_10m),
      weatherCode: current.weather_code,
    };
  } catch (error) {
    console.error('Weather API error:', error);
    throw new Error('Failed to fetch weather data');
  }
};
