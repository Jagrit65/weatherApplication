import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import './App.css';
import Onboard from './components/PresenationLayer/Onboard';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Onboard/>
      </div>
    </WeatherProvider>
  );
}

export default App;