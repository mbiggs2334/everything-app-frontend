import React from 'react';

import './Header.css';

import HeaderLogo from './HeaderLogo';
import Nav from './Nav';
import MobileNav from './navMobile/MobileNav';

const Header = () => {
    return (
        <header>
            <HeaderLogo />
            <nav>
                <Nav />
                <MobileNav />
            </nav>
        </header>
    )
};

export default Header;