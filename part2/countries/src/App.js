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

const Country = ({ country }) => (
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
      style={{'border-style':'solid'}}
      title={`Flag of ${country.name.common}`}
      alt={`Flag of ${country.name.common}`} 
      src={country.flags.svg}
    />
  </div>
);


const Countries = ({ countries }) => {
  console.log(`countries`, countries)

  let result
  
  if (countries.length > 10) {
    result = <p>Too many to show</p>;
  }
  else if (countries.length > 1) {
    result = (
      <div>
        {countries.map(country => {
          const name = country.name.common;
          return <p key={name}>{name}</p>;
        })}
      </div>
    );
  } else if (countries.length == 1) {
    result = (
      <Country country={countries[0]} />
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
