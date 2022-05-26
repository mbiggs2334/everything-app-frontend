import React, { useState } from 'react';

//Components
import MonthTable from '../Pieces/MonthTable';

const CalendarMain = ({changeMonth, currentMonth, calendarData}) => {

    const [refreshCalendar, setRefreshCalendar] = useState({});
    const {month, firstDayOfTheMonth, year, daysInMonth, day} = currentMonth;

    return (
        <div id="CalendarDiv">
            <div id="MonthHeaderDiv">
                <i onClick={() => changeMonth('minus')} className="fa-solid fa-circle-arrow-left"></i>
                <h1 id="CalendarMonthHeader">{calendarData.yearData[month].string}</h1>
                <i onClick={() => changeMonth('plus')} className="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div id="YearHeaderDiv">
                <h2 id="CalendarYearHeader">{year}</h2>
            </div>
            <MonthTable refreshCalendar={setRefreshCalendar} yearData={{month, year, day}} FDOTM={firstDayOfTheMonth} mobile={true} daysInMonth={daysInMonth}/>
        </div>
    );
};

export default CalendarMain;