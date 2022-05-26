import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

//CSS files
import './Nav.css';

//Helper functions && classes
import userContext from '../../UserContext';
import Users from '../../APIs/UsersApi';

const Nav = () => {

    const {user, setUser} = useContext(userContext);

    const history = useHistory();

    const handleLogout = () => {
        Users.logoutUser();
        setUser(null);
        history.push('/');
    };

    return (
        <nav className="MainNav">
            <Link to="/calendar">
                <div>
                    Calendar
                </div>
            </Link>
            <Link to="/news">
                <div>
                    News
                </div>
            </Link>
            <Link to="/notes">
                <div>
                    Notes
                </div>
            </Link>
            <Link to="/crypto">
                <div>
                    Crypto
                </div>
            </Link>
            <Link to="/weather">
                <div>
                    Weather
                </div>
            </Link>
            <div id="account">
                {user
                ?<>
                    <Link to="/account">
                        <div>
                            Account
                        </div>
                    </Link>
                    <div id="MainLogoutButton" onClick={handleLogout}>
                        Logout
                    </div>
                </>
                :<>
                    <Link to="/login">
                        <div>
                            Login
                        </div>
                    </Link>
                    <Link to="signup">
                        <div>
                            Signup
                        </div>
                    </Link>
                </>
                }
            </div>
        </nav> 
    )
};

export default Nav;