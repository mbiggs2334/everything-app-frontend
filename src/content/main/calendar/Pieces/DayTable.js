import React, { useContext } from 'react';
import {v4 as uuid} from 'uuid';

//Components
import EventDivCalendar from './EventDivCalendar';

//Helper Functions && Classes
import useGetEvents from '../GetEvents';

const DayTable = ({mobile, day, yearData}) => {

    let dayName = Object.keys(day)[0];
    let dayNumber = day[Object.keys(day)[0]].number;
    
    const todayEvents = useGetEvents(yearData, dayNumber);

    let now = new Date();
    let today = false;
    if(dayNumber === now.getDate() && yearData.month === now.getMonth() && yearData.year === now.getFullYear()) today = true;

    return (
        <div data-day={dayName} data-number={dayNumber} data-month={yearData.month} data-year={yearData.year}
        className={dayNumber === 0 ? null : today ? "today" : "day"}>
                <span>{dayNumber === 0 ? null : dayNumber}</span>
                {todayEvents.map(event => <EventDivCalendar key={uuid()} eventInfo={event} />)}
        </div>
    );
};

export default DayTable;