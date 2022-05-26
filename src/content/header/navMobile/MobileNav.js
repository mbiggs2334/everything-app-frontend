import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

//CSS files
import './MobileNav.css';
import './MobileNavAnimations.css';

//Components
import MobileNavLinks from './MobileNavLinks';
import ProfileLoginButtons from './ProfileLoginButtons';

//Functions & Classes & Helpers
import userContext from '../../../UserContext';

const MobileNav = () => {

    const navPopUpButton = document.getElementById('mobileNavButtonIcon');
    const {user} = useContext(userContext);
    const [navActive, setNavActive] = useState(false);

    const handleClick = (evt, element) => {
        domChanges(evt, element);
        setNavActive(!navActive);
    };

    const domChanges = (evt, element) => {
        if(navActive){
            if(evt){
                evt.target.classList.remove('rotate');
                document.getElementsByTagName('body')[0].classList.remove('noscroll');
            };
            if(element){
                element.classList.remove('rotate');
                document.getElementsByTagName('body')[0].classList.remove('noscroll');
            };
        } else {
            if(evt){
                evt.target.classList.add('rotate');
                document.getElementsByTagName('body')[0].classList.add('noscroll');
            };
            if(element){
                element.classList.add('rotate');
                document.getElementsByTagName('body')[0].classList.add('noscroll');
            };
        };
    }

    const handleNavSelect = () => {
        handleClick(null, document.getElementById('mobileNavButtonIcon'));
    };

    window.addEventListener('resize', () => {
        if(window.innerWidth >= 577 && navActive){
            domChanges(null, navPopUpButton);
            setNavActive(false);
        };
    });

    const appsInfo = [ ['calendar', 'calendar-days'], ['news','newspaper'], ['notes','paperclip'], ['crypto', 'arrow-trend-up'], ['weather', 'cloud-sun-rain'] ];
    return (
        <div id='mobileNav'>
            {navActive
            ?   <div id='mobileNavModal'>
                    <ProfileLoginButtons clickFunc={handleNavSelect} />
                    <div id='mobileNavMenu'>
                        {appsInfo.map( ([name, icon]) => <MobileNavLinks key={uuid()} clickFunc={handleNavSelect} navPopUpButton={navPopUpButton} destination={name} iconText={icon} /> )}
                    </div>
                </div>
            :   null } 
            <div id='mobileNavButton'>
                <i id='mobileNavButtonIcon' onClick={handleClick} className="fa-solid fa-angle-up"></i>
            </div>
        </div>
    )
};

export default MobileNav;