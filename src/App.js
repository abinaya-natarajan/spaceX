import React, {useState} from 'react';
import LandingPage from './pages/LandingPage';
import {FilterContext} from './context/FilterContext';
import './App.css';

const App = () => {
  const [launchYear, setLaunchYear] = useState('');
  const [launchSuccess, setLaunchSuccess] = useState('');
  const [landSuccess, setLandSuccess] = useState('');

  return (
    <div className="app">
      <FilterContext.Provider value={{launchYear, setLaunchYear, launchSuccess, setLaunchSuccess, landSuccess, setLandSuccess}}>
        <LandingPage/>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
