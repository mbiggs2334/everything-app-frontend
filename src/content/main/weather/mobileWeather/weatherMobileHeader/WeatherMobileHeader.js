import React, { useContext } from 'react';

//CSS files
import './WeatherMobileHeader.css';

//Components
import ApiError from '../../pieces/apiError/ApiError';

// Functions & Classes & Helpers
import WeatherSearchBar from '../../pieces/weatherSearchBar/WeatherSearchBar';
import WeatherContext from '../../WeatherContext';

const WeatherMobileHeader = () => {

    const {errorMessage} = useContext(WeatherContext);

    return (
        <>
            <div id="weatherMobileHeader">
                <h1 className="weatherMobileHeader-header">Weather</h1>
                <hr />
                <WeatherSearchBar />
                {errorMessage ? <ApiError /> : null}
            </div>
        </>
    )
};

export default WeatherMobileHeader;