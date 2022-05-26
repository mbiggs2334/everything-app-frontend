import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

//Functions & Classes & Helpers
import userContext from '../../../UserContext';
import Users from '../../../APIs/UsersApi';

const ProfileLoginButtons = ({clickFunc}) => {
    const {user, setUser} = useContext(userContext);
    let history = useHistory();

    const handleLogout = () => {
        clickFunc();
        Users.logoutUser();
        setUser(null);
        history.push('/');
    };

    return (
        <div id='mobileAccountLoginButtonCont'>
            {
                user ?
                <>
                <Link to="/account">
                    <div onClick={clickFunc} id='mobileAccountButton'>
                        <div id='accountContainer'>
                            <div id="accountIcon">
                                <i className="fa-solid fa-user"></i>
                            </div> 
                            Account
                        </div>
                    </div>
                </Link>
                <div id='mobileLogoutButton' onClick={handleLogout}>
                    <div id='logoutContainer'>
                        <div id='logoutIcon'>
                            <i className="fa-solid fa-door-open"></i>
                        </div>
                        Logout
                    </div>
                </div> 
                </> 
                : <>
                <Link to="/login">
                    <div onClick={clickFunc} id='mobileLoginButton'>
                        <div id='loginContainer'>
                            <div id='loginIcon'>
                                <i className="fa-solid fa-pencil"></i>
                            </div>
                            Login
                        </div>
                    </div>
                </Link>
                <Link to="/signup">
                    <div onClick={clickFunc} id='mobileSignupButton'>
                        <div id='signupContainer'>
                            <div id='signupIcon'>
                                <i className="fa-solid fa-clipboard-list"></i>
                            </div>
                            Signup
                        </div>
                    </div>
                </Link>
                </>
            }
        </div>
    )
}

export default ProfileLoginButtons;