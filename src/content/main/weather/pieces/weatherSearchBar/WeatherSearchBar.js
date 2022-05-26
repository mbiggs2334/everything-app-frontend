import React, { useState, useContext } from 'react';

// Functions & Classes & Helpers
import handleFormChange from '../../../../../helperFuncs/handleFormChange';
import WeatherContext from '../../WeatherContext';

const WeatherSearchBar = () => {
    const INITIAL_STATE = {
        queryString: ''
    };

    const {getWeather} = useContext(WeatherContext);
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        handleFormChange(setFormData, event);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.queryString === '') return;
        getWeather(formData.queryString.trim(), setFormData, INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit} id="weatherSearchBarForm">
            <div className="group-input">
                <input 
                    type="text"
                    name="queryString"
                    id="searchBarInput"
                    placeholder='City, state, zip...'
                    value={formData.queryString}
                    onChange={handleChange}
                />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    )
};

export default WeatherSearchBar;