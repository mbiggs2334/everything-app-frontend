import React from 'react';
import {v4 as uuid} from 'uuid';

//Components
import WeekTable from './WeekTable';
import WeekData from '../WeekData';

const MonthTable = ({mobile, FDOTM, daysInMonth, yearData, refreshCalendar}) => {

    let weeks = FDOTM === "Friday" || FDOTM === "Saturday" && daysInMonth >= 30 ? 6 : 5;
    if(FDOTM === "Friday" && daysInMonth === 30) weeks = 5;

    let counting = false;
    let count = 0;
    let month = [];
    for(let i = 0; i < weeks; i++){
        month.push(new WeekData());
    }
    while(count <= daysInMonth){
        if(count === daysInMonth) break;
        for(let week of month){
            for(let day of Object.keys(week.data)){
                if(count === daysInMonth) break;
                if(day === FDOTM) counting = true;
                if(counting){
                    count++;
                    week.data[day].number = count;
                };
            };
        };
    }
    
    return (
        <div id="CalendarTable">
            <div id="CalendarTable-Body">
                <div id="DaysOfTheWeek">
                    <div className="dayHeader">S</div>
                    <div className="dayHeader">M</div>
                    <div className="dayHeader">T</div>
                    <div className="dayHeader">W</div>
                    <div className="dayHeader">Th</div>
                    <div className="dayHeader">F</div>
                    <div className="dayHeader">S</div>
                </div>
                {month.map(week => <WeekTable yearData={yearData} key={uuid()} mobile={mobile} week={week} />)}
            </div>
        </div>
    );
};

export default MonthTable;