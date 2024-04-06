import React from 'react'

const StateList = ({ selectedCountry, selectedState, setSelectedState }) => {

    const states = {
        "India": ["Bihar", "Delhi","Kolkata","Andhra Pradesh","Assam","Goa","Gujarat","Haryana",],
        "USA": ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California'],
        "Russia": ["Belgorod Oblast", "Ivanovo Oblast", "Ingushetia", "Chechnya", "Komi Republic"]
    }

    const handleState = (state) => {
        setSelectedState(state);
      };
    console.log("Anuj")

  return (
    <div>
        <h2>State of {selectedCountry}</h2>
        <ul>
        {selectedCountry && states[selectedCountry].map((state, index) => (
          <li key={index} className={state === selectedState ? 'selected' : ''} onClick={() => handleState(state)}>
            {state}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StateList