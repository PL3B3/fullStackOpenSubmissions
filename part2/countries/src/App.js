import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filter = ({ value, onChange }) => {
  return (
    <form>
      <strong>Find Countries: </strong>
      <input value={value} onChange={onChange} />
    </form>
  );
};

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState({})

  const weatherHook = () => {
    axios
      .get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => setWeatherData(response.data))
  }

  useEffect(weatherHook, [])

  return (
    <div>
      weatherData
    </div>
  )
}

const CountryDetails = ({ country }) => (
  <div>
    <h2>{country.name.common} ({country.flag})</h2>
    <p>Population: {country.population}</p>
    <p>Capital: {country.capital}</p>
    <h3>Languages</h3>
    <ul>
      {Object.entries(country.languages).map(([key, value]) => {
        return <li key={key}>{value}</li>
      })}
    </ul>
    <img 
      width="150" 
      style={{'borderStyle':'solid'}}
      title={`Flag of ${country.name.common}`}
      alt={`Flag of ${country.name.common}`} 
      src={country.flags.svg}
    />
    <Weather city={country.capital} />
  </div>
);

const CountryList = ({ countries, expanded, onExpand }) => {
  return (
    <div>
      {countries.map(country => {
        const name = country.name.common;
        let result
        if (expanded[name] === true) {
          result = <CountryDetails key={name} country={country} />;
        } else {
          result = (
            <div key={name}>
              {name}
              <button onClick={onExpand(name)}>details</button>
            </div>
          );
        }
        return result;
      })}
    </div>
  )
}


const Countries = ({ countries }) => {
  const [expanded, setExpanded] = useState({})

  const onExpand = (name) => () => {
    const newExpanded = {
      ...expanded
    };
    newExpanded[name] = true;

    setExpanded(newExpanded)
  }


  let result
  
  if (countries.length > 10) {
    result = <p>Too many to show</p>;
  }
  else if (countries.length > 1) {
    result = <CountryList expanded={expanded} onExpand={onExpand} countries={countries} />;
  } else if (countries.length == 1) {
    result = (
      <CountryDetails country={countries[0]} />
    );
  } else {
    result = (
      <div></div>
    );
  }

  return result;
};


const matches = (text, filter) => (
  text.toLowerCase().includes(filter.toLowerCase())
);

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('');
  
  const countriesHook = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => setCountries(response.data));
  };
  
  useEffect(countriesHook, []);


  const onFilterChange = (event) => {
    setFilter(event.target.value)
  };
  
  const filteredCountries = (
    filter
      ? countries.filter(country => matches(country.name.common, filter))
      : countries
  );

  return (
    <div>
      <Filter value={filter} onChange={onFilterChange} />
      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
