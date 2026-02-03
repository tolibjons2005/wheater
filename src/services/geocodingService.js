import axios from 'axios';

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export const searchCities = async (query) => {
  try {
    const response = await axios.get(GEOCODING_API_URL, {
      params: {
        name: query,
        count: 5,
        language: 'en',
        format: 'json',
      },
    });

    if (response.data.results) {
      return response.data.results.map((city) => ({
        id: city.id,
        name: city.name,
        country: city.country,
        latitude: city.latitude,
        longitude: city.longitude,
        admin1: city.admin1 || '',
      }));
    }

    return [];
  } catch (error) {
    console.error('Geocoding error:', error);
    throw new Error('Failed to search for cities');
  }
};
