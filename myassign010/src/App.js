import './App.css';
import { useState } from 'react';
import Country from './Components/Country';
import StateList from './Components/StateList';

function App() {

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  return (
    <div className="App">
      <h1>Country App</h1>

      <Country
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        setSelectedState={setSelectedState}
      />
      <StateList
        selectedCountry={selectedCountry}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
    </div>
  );
}

export default App;