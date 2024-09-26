import logo from './logo.svg';
import './App.css';
import CityInput from './components/common/city-input';
import WeatherRecommendation from './components/weather-recommendation';
import { useState } from 'react';

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    if (city && !cities.includes(city)) {
      setCities([...cities, city]);
    }
  };

  return (
    <div className="App">
      <h1 className='heading'>Weather Travel Recommendation App</h1>
      <br/>
      <CityInput addCity={addCity} />
      <div>
      {
        cities.length
        ? <>
          <h3>Selected cities</h3>
           {cities?.map((name, idx) => <span className='name'>{name}{idx !== cities.length-1 ? ', ':''}</span>)}
        </>
        : null
      }
      </div>
      <br/>
      <WeatherRecommendation cities={cities} />
    </div>
  );
}

export default App;
