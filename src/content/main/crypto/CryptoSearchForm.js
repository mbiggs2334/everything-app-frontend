import React, { useState } from 'react';

//Helper functions && Classes
import Crypto from '../../../APIs/CryptoApi';
import handleFormChange from '../../../helperFuncs/handleFormChange';
import Currencies from './Currencies';

const SearchForm = ({formSubmit}) => {
    const INITIAL_STATE = {
        query: '',
        currency: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(!formData.currency){
            alert("Please select a currency");
            return;
        };
        formSubmit(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = (evt) => {
        handleFormChange(setFormData, evt);
    };

    return (
        <form className="CryptoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                name="query"
                onChange={handleChange}
                value={formData.query}
                placeholder="Search a Crypto currency..."
                required
            />
            <select name="currency" value={formData.currency} onChange={handleChange}>
                {/* adding a key seems to prevent selection from showing on doc */}
                {Currencies.map(curr => <option value={curr}>{curr}</option>)}
            </select>
            <button>Search</button>
        </form>
    );
};

export default SearchForm;