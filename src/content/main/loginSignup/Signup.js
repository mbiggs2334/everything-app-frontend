import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

//CSS files
import './MobileSignup.css';
import './MainSignup.css';

//Components
import Form from './Form';

//Functions & Classes & Helpers
import Users from '../../../APIs/UsersApi';
import userContext from '../../../UserContext';
import useErrorMessageHook from '../../../helperFuncs/errorMessageHook';
import checkPasswordMatch from '../../../helperFuncs/checkPasswordMatch';

const Signup = () => {
    const {user, setUser} = useContext(userContext);
    const [errorMessage, setErrorMessage] = useErrorMessageHook();

    const initialFormState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const inputArray = [['username', 'Username:'], ['email', 'Email:'], ['password', 'Password:'], ['confirmPassword', 'Confirm Password:']];

    const onSubmit = async (userInfo) => {
        const {password, confirmPassword} = userInfo;
        if(!checkPasswordMatch(password, confirmPassword)) {
            setErrorMessage('<p>Passwords must match.</p>');
            return;
        };
        try {
            let res = await Users.registerUser(userInfo);
            setUser(res.user);
        } catch(e){
            setErrorMessage(e.message);
        }
    };

    return (
        <div id='signupForm'>
            <div id='mobileSignupForm'>
                <h2>Glad you decided to join!</h2>
                {errorMessage ? <div dangerouslySetInnerHTML={{__html: errorMessage}} className='SignupErrorMessage'></div> : null}
                <Form submitFunc={onSubmit} type='signup' loc='mobile' inputArray={inputArray} INITIAL_STATE={initialFormState} buttonText='Register' />
                <p>Already have an acocunt? Click <Link to="/login">here</Link> to login.</p>
            </div>
            <div id='mainSignupForm'>
                <h2>Glad you decided to join!</h2>
                {errorMessage ? <div dangerouslySetInnerHTML={{__html: errorMessage}} className='SignupErrorMessage'></div> : null}
                <Form submitFunc={onSubmit} type='signup' loc='main' inputArray={inputArray} INITIAL_STATE={initialFormState} buttonText='Register' />
                <p>Already have an acocunt? Click <Link to="/login">here</Link> to login.</p>
            </div>
        </div>
    )
};

export default Signup;