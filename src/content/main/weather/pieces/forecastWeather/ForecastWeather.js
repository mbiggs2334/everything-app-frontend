import React, { useContext} from 'react';
import {v4 as uuid} from 'uuid';

//Components
import HourlyForecast from './HourlyForecast';

//Functions & Classes & Helpers
import WeatherContext from '../../WeatherContext';
import getPrecipChance from './getPrecipChance';

const ForecastWeather = ({weather}) => {
    const {measureSystem: [measuringSystem, setMeasuringSystem]} = useContext(WeatherContext);
    if(weather === undefined || weather === null) return (null);
    const {current, location, forecast: {forecastday: [forecastInfo]}} = weather;

    return (
        <div id="forecastWeatherDisplay" className={current.is_day === 1 ? 'weatherDay' : 'weatherNight'}>
            <div id='forecastWeatherDailyContainer'  className={current.is_day === 1 ? 'weatherDay2' : 'weatherNight2'}>
                <h2>{location.name}</h2>
                <div id='forecastWeatherDaily'>

                    <div id='forecastWeatherDailyPrecipChance'>
                        <h3>Chance of Precipitation</h3>
                        <span>{getPrecipChance(forecastInfo.day.daily_chance_of_rain, forecastInfo.day.daily_chance_of_snow)}%</span>
                    </div>

                    <div id="forecastWeatherDailyTempsContainer">
                        <h3>Temps</h3>
                        <div id="forecastWeatherDailyTemps">
                            <span><i className="fa-solid fa-arrow-down-long"></i> {measuringSystem === 'imperial' ? Math.round(forecastInfo.day.mintemp_f) : Math.round(forecastInfo.day.mintemp_c) }</span>
                            |
                            <span>{measuringSystem === 'imperial' ? Math.round(forecastInfo.day.maxtemp_f) : Math.round(forecastInfo.day.maxtemp_c) } <i className="fa-solid fa-arrow-up-long"></i></span>
                        </div>
                    </div>

                    <div id="forecastWeatherSunTimes">
                        <span><h2>Sunrise: </h2> {forecastInfo.astro.sunrise}</span>
                        <span><h2>Sunset: </h2> {forecastInfo.astro.sunset}</span>
                    </div>

                </div>
                    

            </div>

            <div id="forecastWeatherHourly">
                {forecastInfo.hour.map(day => <HourlyForecast key={uuid()} day={day} />)}
            </div>

        </div>
    )
};

export default ForecastWeather;