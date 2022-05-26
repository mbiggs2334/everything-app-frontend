import React, { useContext } from 'react';

//CSS Files
import './WeatherMain.css';
import './CurrentWeatherDisplay.css';
import './ForecastWeather.css';

//Components
import WeatherSearchBar from '../pieces/weatherSearchBar/WeatherSearchBar';
import CurrentWeatherDisplay from '../pieces/currentWeatherDisplay/CurrentWeatherDisplay';
import ForecastWeather from '../pieces/forecastWeather/ForecastWeather';

//Functions & Classes & Helpers
import WeatherContext from '../WeatherContext';

const WeatherMain = () => {

    const {currentWeather} = useContext(WeatherContext);

    return (
        <div id='weatherMain'>
            <h1 id="weatherMainHeader">Weather</h1>
            <hr />
            <WeatherSearchBar />
            <CurrentWeatherDisplay weather={currentWeather} />
            <ForecastWeather weather={currentWeather} />
        </div>
    )
};

export default WeatherMain;