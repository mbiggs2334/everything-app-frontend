import React from 'react';

//CSS files
import './WeatherMobile.css';

//Components
import WeatherMobileHeader from './weatherMobileHeader/WeatherMobileHeader';
// @ts-ignore
import WeatherMobileBody from './weatherMobileBody/WeatherMobileBody';

const WeatherMobile = () => {
    return (
        <div id='weatherMobile'>
            <WeatherMobileHeader />
            <WeatherMobileBody />
        </div>
    )
};

export default WeatherMobile;