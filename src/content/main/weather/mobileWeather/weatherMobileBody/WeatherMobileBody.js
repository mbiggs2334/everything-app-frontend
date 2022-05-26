import React, { useContext } from 'react';

//CSS files
import './CurrentWeatherDisplayMobile.css';
import './ForecastWeatherMobile.css';

//Components
import CurrentWeatherDisplay from '../../pieces/currentWeatherDisplay/CurrentWeatherDisplay';
import ForecastWeather from '../../pieces/forecastWeather/ForecastWeather';

//Functions & Classes & Helpers
import WeatherContext from '../../WeatherContext';

const WeatherMobileBody = () => {
    const {currentWeather} = useContext(WeatherContext);

    return (
        <div id='mobileWeatherBody'>
            <CurrentWeatherDisplay weather={currentWeather} />
            <ForecastWeather weather={currentWeather} />
        </div>
    )
};

export default WeatherMobileBody;