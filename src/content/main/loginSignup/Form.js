import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

//Functions & Classes & Helpers
import handleFormChange from '../../../helperFuncs/handleFormChange';

const Form = ({loc, INITIAL_STATE, buttonText, type, inputArray, submitFunc}) => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        handleFormChange(setFormData, evt);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if(submitFunc) submitFunc(formData);
    };

    return (
        <form style={{height: '150%'}} id={`${loc + type}Form`} onSubmit={handleSubmit}>
            {inputArray.map(([name, label]) =>
                <>
                    <label htmlFor={`mobileLogin${name[0].toUpperCase() + name.slice(1)}Input`}>{label}</label>
                    <input 
                        type={name === 'confirmPassword' ? 'password' : name}
                        id={loc === 'mobile' 
                            ? `mobileLogin${name[0].toUpperCase() + name.slice(1)}Input` 
                            : `mainLogin${name[0].toUpperCase() + name.slice(1)}Input`
                            }
                        name={name}
                        onChange={handleChange}
                        value={formData[name]}
                        placeholder={label.replace(/:/,'...').toLowerCase()}
                        minLength={name === 'password' ? 8 : null}
                        maxLength={name === 'password' ? 32 : null}
                        required
                    />
                </>
            )}
            <button>{buttonText}</button>
        </form>
    )
}

export default Form;