import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavLinks = ({destination, iconText, clickFunc, navPopUpButton}) => {

    const handleClick = () => {
        navPopUpButton.classList.remove('rotate');
        clickFunc();
    }

    return (
        <div className={`${destination}MobileNavDiv`}>
            <Link onClick={handleClick} to={destination === 'home' ? '/' : `/${destination}`}>
                <div id={`${destination}MobileNav`}>
                    {destination.charAt(0).toUpperCase() + destination.slice(1)}
                </div>
            </Link>
            <Link onClick={handleClick} to={destination === 'home' ? '/' : `/${destination}`}>
                <div id={`${destination}MobileNav-iconContainer`}>
                    <i className={`fa-solid fa-${iconText}`}></i>
                </div>
            </Link>
        </div>
    )
};

export default MobileNavLinks;