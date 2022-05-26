import React, { useState, useEffect } from 'react'
import WeatherContext from './WeatherContext';

// Components
import WeatherMobile from './mobileWeather/WeatherMobile';
import WeatherMain from './mainWeather/WeatherMain';

// Functions & Classes
import WeatherApi from '../../../APIs/WeatherApi';
import useBooleanHook from '../../../helperFuncs/booleanHook';
import scrollToNow from './scrollToNow';

const Weather = ({weather, measureSystem}) => {

    const [currentWeather, setCurrentWeather] = weather;
    const [errorMessage, setErrorMessage] = useState(null);
    const [clickedMiscInfo, setClickedMiscInfo] = useBooleanHook(false);

    const getWeather = async (query, formFunc, formInitState) => {
        let res = await WeatherApi.getCurrentWeather(query);

        //Checks for Error response from API
        //shows error if found
        if(Object.keys(WeatherApi.errorMessages).includes(res.toString())){
            setErrorMessage(() => WeatherApi.errorMessages[res]);
            setCurrentWeather(() => null);
            return;
        };

        if(errorMessage) setErrorMessage(() => null);
        formFunc(formInitState);
        setCurrentWeather(() => res);
    };
    
    useEffect(()=>{
        if(currentWeather !== undefined && currentWeather !== null) scrollToNow(currentWeather.location.localtime);
    }, [currentWeather])

    return (
        <> 
            <WeatherContext.Provider value={{
                getWeather,
                currentWeather,
                errorMessage,
                measureSystem,
                clickedInfo: {clickedMiscInfo, setClickedMiscInfo}
            }}>
                <WeatherMobile />
                <WeatherMain />
            </WeatherContext.Provider>
        </>
    )
};

export default Weather;