import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

//CSS files
import './MainLogin.css';
import './MobileLogin.css';

//Components
import Form from './Form';

//Functions & Classes & Helpers
import Users from '../../../APIs/UsersApi';
import userContext from '../../../UserContext';
import useErrorMessageHook from '../../../helperFuncs/errorMessageHook';

const Login = () => {
    const {user, setUser} = useContext(userContext);

    const [errorMessage, setErrorMessage] = useErrorMessageHook();;

    const formInitialState = {
        username: '',
        password: ''
    };
    const inputArray = [['username', 'Username:'], ['password', 'Password:']];

    const handleSubmit = async({username, password}) => {
        try{
            let res = await Users.authenticateAndLoginUser(username, password);
            if(errorMessage) setErrorMessage(null);
            setUser(res.user);
        } catch(e){
            setErrorMessage(e.message);
        };
    };

    return (
        <div id='loginForm'>
            <div id="mobileLoginForm">
                <h2>Welcome back!</h2>
                <p>Need to register? Sign up <Link to="/signup">here</Link>.</p>
                {errorMessage ? <p className="loginErrorMessage">{errorMessage}</p> : null}
                <Form submitFunc={handleSubmit} type="login" loc="mobile" buttonText="Login" INITIAL_STATE={formInitialState} inputArray={inputArray} />
            </div>
            <div id='mainLoginForm'>
                <h2>Welcome back!</h2>
                <p>Need to register? Sign up <Link to="/signup">here</Link>.</p>
                {errorMessage ? <p className="loginErrorMessage">{errorMessage}</p> : null}
                <Form submitFunc={handleSubmit} type='login' loc='main' buttonText="Login" INITIAL_STATE={formInitialState} inputArray={inputArray} />
            </div>
        </div>
    )
};

export default Login;