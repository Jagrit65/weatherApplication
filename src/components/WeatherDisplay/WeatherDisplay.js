import React from 'react';
import Loader from '../Loader/Loader'
import Error from '../Error/Error'

import styles from './WeatherDisplay.module.css';
import { useWeather } from '../../context/WeatherContext';

const WeatherDisplay = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) return <Loader/>
  if (error) return <Error/>;

  return (
    weatherData && (
      <div className={styles.weatherContainer}>
        <h2>Weather in {weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Condition: {weatherData.weather[0].description}</p>
      </div>
    )
  );
};

export default WeatherDisplay;