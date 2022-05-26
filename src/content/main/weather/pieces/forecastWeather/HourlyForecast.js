import React, { useContext } from 'react';

//Functions & Classes & Helpers
import {timePrettifier} from '../../../../../helperFuncs/regexFuncs';
import WeatherContext from '../../WeatherContext';

const HourlyForecast = ({day}) => {

    const {measureSystem: [measuringSystem, setMeasuringSystem]} = useContext(WeatherContext);

    return (
        <div className={day.is_day === 1 ? 'weatherDay hourlyForecastDiv' : 'weatherNight hourlyForecastDiv'} id={timePrettifier(day.time)}>

            <div id='hourlyForecastTod'>
                {timePrettifier(day.time)}
            </div>

            <div id='hourlyForecastCondition'>
                <img src={day.condition.icon} />
            </div>

            <div id='hourlyForecastTemps'>
                {measuringSystem === 'imperial' ? Math.round(day.temp_f) + '°F' : Math.round(day.temp_c) + '°C'}
            </div>

        </div>
    )
};

export default HourlyForecast;