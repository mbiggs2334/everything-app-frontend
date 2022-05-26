import React from 'react';

//Functions & Classes & Helpers
import {removeYearFromDate} from '../../../../../helperFuncs/regexFuncs';

const WeatherInfoPanel1 = ({changeMeasuringSystem, weather}) => {

    const {handleMeasuringSystemChange, measuringSystem} = changeMeasuringSystem;

    const {current, location} = weather;

    const handleClick = () => {
        handleMeasuringSystemChange();
    };

    return (
        <div id='weatherInfo-panel1'>

            <div id='weatherIconTempContainer'>
                <div id="weatherIconContainer">
                    <div className="weatherIconDivBG" style={{backgroundImage: `url(${current.condition.icon})`}}></div>
                </div>
                <div id="tempSelectionAndView">
                    <div id='tempSelection'>
                        {measuringSystem === 'imperial' 
                        ? <><span className="weatherTempActive">°F</span> | <span onClick={handleClick} className="weatherTempInactive">°C</span></> 
                        : <><span onClick={handleClick} className="weatherTempInactive">°F</span> | <span className="weatherTempActive">°C</span></> }
                    </div>
                    <span id='weatherTemp'>
                            {measuringSystem === 'imperial' ? `${Math.round(current.temp_f)}` : `${Math.round(current.temp_c)}`}
                    </span>
                </div>
            </div>

            <div id="weatherLocationInfo">
                <span id='weatherLocationCity'>{location.name}, {location.region}</span>
                <span id='weatherLocationCountry'>{location.country}</span>
                <span id='weatherLocationHumidity'>HMD: {current.humidity}%</span>
                <span id='weatherLastUpdated'>Updated: {removeYearFromDate(current.last_updated).replace(' ', ' @')}</span>
                <span id='weatherLocalTime'>Local Time: {removeYearFromDate(location.localtime).replace(' ', ' @')}</span>
            </div>

        </div>
    )
};

export default WeatherInfoPanel1;