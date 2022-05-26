import React from 'react';

//Functions & Classes & Helpers 
import getWindDirectionDegrees from './getWindDirectionDeg';

const WeatherInfoPanel2 = ({weather, changeMeasuringSystem}) => {

    const {measuringSystem} = changeMeasuringSystem;
    const {current} = weather;
    const wind = getWindDirectionDegrees(current.wind_dir);
    
    return (
        <div id='weatherInfo-panel2Wrapper'>
            <div id='weatherInfo-panel2'>
                <div id="weatherWindInfo">
                    <div>
                        <h3>Wind</h3>
                        <hr style={{marginBottom: '0rem', marginTop: '.25rem'}}/>
                        <div id="weatherWindInfoDirectionAndLogo">
                            <span id='weatherWindInfoDirection'>{wind[0]}</span>
                            <span style={{transform: `rotate(${wind[1]}deg)`}} id="weatherWindInfoArrow"><i className="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                </div>

                <div id="weatherMiscInfo">
                    <span id="">Speed: {measuringSystem === 'imperial' ? Math.round(current.wind_mph) + "mph" : Math.round(current.wind_kph) + "kph"}</span>
                    <span id="">Gust Spd: {measuringSystem === 'imperial' ? Math.round(current.gust_mph) + "mph" : Math.round(current.gust_kph) + "kph"}</span>
                    <span id="">Precipitation: {measuringSystem === 'imperial' ? Math.round(current.precip_in) + "in" : Math.round(current.precip_mm) + "mm"}</span>
                    <span id="">Visibility: {measuringSystem === 'imperial' ? Math.round(current.vis_miles) + "mi" : Math.round(current.vis_km) + "km"}</span>
                    <span id="">UV: {current.uv}</span>
                    <span id="">AP: {measuringSystem === 'imperial' ? Math.round(current.pressure_in) + 'in' : Math.round(current.pressure_mb) + 'mb'}</span>
                </div>
            </div>
        </div>
    )
};

export default WeatherInfoPanel2;