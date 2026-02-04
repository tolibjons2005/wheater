import { useState, useEffect, useCallback, useMemo } from 'react';
import { searchCities } from '../services/geocodingService';

const CitySearch = ({ onCitySelect, selectedCity }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const debouncedSearch = useMemo(
    () => debounce(async (searchQuery) => {
      if (searchQuery.length < 2) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      setLoading(true);
      try {
        const cities = await searchCities(searchQuery);
        setSuggestions(cities);
        setShowSuggestions(cities.length > 0);
      } catch {
        setSuggestions([]);
        setShowSuggestions(false);
      } finally {
        setLoading(false);
      }
    }, 300),
    [debounce]
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  useEffect(() => {
    if (selectedCity) {
      setQuery(selectedCity.name);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [selectedCity]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (query.length > 0) {
      setQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleCitySelect = (city) => {
    setQuery(city.name);
    setShowSuggestions(false);
    setSuggestions([]);
    onCitySelect(city);
  };

  return (
    <div className="city-search">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search city..."
        className="search-input"
        onClick={handleSearchClick}
      />
      {loading && <span className="search-loading">Searching...</span>}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((city) => (
            <li
              key={city.id}
              className="suggestion-item"
              onClick={() => handleCitySelect(city)}
            >
              <span className="city-name">{city.name}</span>
              <span className="city-details">
                {city.admin1 && `${city.admin1}, `}{city.country}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
