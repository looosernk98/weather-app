import React from 'react'
import './index.css'
const WeatherCard = ({ weatherData }) => {
  const { name, weather, main, wind, clouds } = weatherData;

  return (
    <>
      {
        Object.keys(weatherData).length
          ?
          <div class="weather-card">
            <h2 class="city-name">{name}</h2>
            <div class="weather-info">
              <div class="description">
                <h3>{weather?.length ? weather[0]?.main : '-'}</h3>
                <p>{weather?.length ? weather[0]?.description : '-'}</p>
              </div>

              <div class="details">
                <div class="details-row">
                  <i class="wi wi-thermometer"></i>
                  <span>Temperature: </span><span>{main?.temp}°C</span>
                </div>
                <div class="details-row">
                  <i class="wi wi-humidity"></i>
                  <span>Humidity: </span><span>{main?.humidity}%</span>
                </div>
                <div class="details-row">
                  <i class="wi wi-barometer"></i>
                  <span>Pressure: </span><span>{main?.pressure} hPa</span>
                </div>
                <div class="details-row">
                  <i class="wi wi-cloud"></i>
                  <span>Clouds: </span><span>{clouds?.all}%</span>
                </div>
                <div class="details-row">
                  <i class="wi wi-strong-wind"></i>
                  <span>Wind Speed: </span><span>{wind?.speed} m/s</span>
                </div>
              </div>
            </div>
          </div>

          : null
      }
    </>
  )
}

export default WeatherCard