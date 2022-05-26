import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Components
import Home from './home/Home';
import Calendar from './calendar/Calendar';
import News from './news/News';
import Notes from './notes/Notes';
import Account from './account/Account';
import Crypto from './crypto/Crypto';
import Weather from './weather/WeatherParent';

import Login from './loginSignup/Login';
import Signup from './loginSignup/Signup';

import NotFound from './404';

//Routes
import NotesRoutes from './notes/NotesRoutes';

//Helper Functions && Classes
import CalendarData from './calendar/YearData';

const Routes = ({user}) => {

    //Keeps Weather State
    const [currentWeather, setCurrentWeather] = useState();
    const [measuringSystem, setMeasuringSystem] = useState('imperial');

    //Keeps News Articles
    const [newsArticles, setNewsArticles] = useState({articles: [], skip:0});

    //CalendarData
    let now = new Date();
    let day = now.getDate()
    let month = now.getMonth();
    let year = now.getFullYear();
    let calendarData = new CalendarData(year);
    let firstDayOfTheMonth = calendarData.getDayOfWeek(month, 1, year);
    let daysInMonth = calendarData.yearData[month].days;

    const currentMonthData = {
        day,
        month,
        year,
        firstDayOfTheMonth,
        daysInMonth
    };

    const [currentMonth, setCurrentMonth] = useState(currentMonthData);
    const [yearData, setYearData] = useState(calendarData);

    return (
        <main>
            <Switch>
                <Route exact path="/"><Redirect to="/calendar" /></Route>
                <Route exact path="/calendar"><Calendar yearData={[yearData, setYearData]} monthData={[currentMonth, setCurrentMonth]}/></Route>
                <Route exact path="/news">
                    <News news={{newsArticles, setNewsArticles}} />
                </Route>
                <Route exact path="/notes"><Notes /></Route>
                <Route exact path="/crypto"><Crypto /></Route>
                <Route exact path="/weather">
                    <Weather weather={[currentWeather, setCurrentWeather]} measureSystem={[measuringSystem, setMeasuringSystem]} />
                </Route>
                <Route exact path="/account">
                    {user ? <Account /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/login">
                    {user ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route exact path="/signup">
                    {user ? <Redirect to="/" /> : <Signup />}
                </Route>
                <NotesRoutes />
                <Route><NotFound /></Route>
            </Switch>
        </main>
    )
};

export default Routes;