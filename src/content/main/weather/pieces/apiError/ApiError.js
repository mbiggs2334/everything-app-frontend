import React, { useContext } from 'react';

//CSS file
import './ApiError.css';

// Functions & Classes & Helpers
import WeatherContext from '../../WeatherContext';

const ApiError = () => {

    const { errorMessage } = useContext(WeatherContext);

    return (
        <div className="weatherApiError" >
            <span>{errorMessage}</span>
        </div>
    )
};

export default ApiError;