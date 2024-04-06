import React from 'react'

const Country = ({selectedCountry, setSelectedCountry, setSelectedState}) => {

    const countries = ["India", "USA", "Russia"];

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState('');
      };

  return (
    <div>
        <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>
    </div>
  )
}

export default Country