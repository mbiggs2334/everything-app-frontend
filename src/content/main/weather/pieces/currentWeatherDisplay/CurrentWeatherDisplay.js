import React, { useContext } from 'react';

//Components
import WeatherInfoPanel1 from './WeatherInfoPanel1';
import WeatherInfoPanel2 from './WeatherInfoPanel2';

//Functions & Classes & Helpers
import WeatherContext from '../../WeatherContext';

const CurrentWeatherDisplay = ({weather}) => {
    const {measureSystem: [measuringSystem, setMeasuringSystem], clickedInfo} = useContext(WeatherContext);

    if(weather === undefined || weather === null) return (null);
    const {current, location} = weather;

    const handleMeasuringSystemChange = () => {
        if(measuringSystem === 'imperial'){
            setMeasuringSystem('metric');
        } else {
            setMeasuringSystem('imperial');
        };
    };


    return(
        <div id="currentWeatherDisplayWrapper">
            <div id="currentWeatherDisplayPanel1" className={current.is_day === 1 ? 'weatherDay' : 'weatherNight'}>
                <WeatherInfoPanel1 changeMeasuringSystem={{handleMeasuringSystemChange, measuringSystem}} weather={{current, location}} />
            </div>
            <div id="currentWeatherDisplayPanel2" 
                className={`
                    ${current.is_day === 1 ? 'weatherDay' : 'weatherNight'} 
                    `}>
                <WeatherInfoPanel2 changeMeasuringSystem={{handleMeasuringSystemChange, measuringSystem}} weather={{current, location}} />
            </div>
        </div>

    )
};

export default CurrentWeatherDisplay;