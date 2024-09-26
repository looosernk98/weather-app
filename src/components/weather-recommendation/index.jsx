import React, { useState } from 'react';
import WeatherCard from '../common/weather-card';
import './index.css';

const apiKey = 'df0b43ecd1b508cffa69fa40e968d941';

function WeatherRecommendation({ cities }) {
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    return data;
  };

  // Fetch weather for all cities and set the state
  const fetchWeatherData = async () => {
    const allWeatherData = [];
    for (let city of cities) {
      const data = await getWeatherData(city);
      allWeatherData.push(data);
    }
    setWeatherData(allWeatherData);
  };

  const evaluateWeatherConditions = (data) => {
    const temp = data?.main?.temp;
    const condition = data?.weather[0]?.description;

    if (condition?.includes('clear') && temp >= 15 && temp <= 30) {
      return true;
    }
    return false;
  };

  const recommendCity = () => {
    for (let data of weatherData) {
      if (evaluateWeatherConditions(data)) {
        return data?.name;
      }
    }
    return 'No suitable cities for travel at this time.';
  };

  return (
    <div className='main-content'>
      <button onClick={fetchWeatherData}>Fetch Weather</button>
      {weatherData.length > 0 ? (
        <div className='weather-container'>
          <h3>Weather Data for selected cities</h3>
          <div className='list'>
            {weatherData.map((data, index) => (
              <div key={index}>
                <WeatherCard weatherData={data} />
              </div>
            ))}
          </div>

        </div>
      ) : null}

      {weatherData.length > 0 ? (
        <div className='recommended'>
          <h3>Recommended City for Travel:</h3>
          <p>{recommendCity()}</p>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherRecommendation;
