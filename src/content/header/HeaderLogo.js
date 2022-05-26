import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
    return (
        <h1 id="headerLogo" className="Header-logo"><Link to="/">EverythingApp</Link></h1>
    )
};

export default HeaderLogo;