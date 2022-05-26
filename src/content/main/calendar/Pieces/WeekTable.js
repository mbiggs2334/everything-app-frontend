import React from 'react';
import {v4 as uuid} from 'uuid';

//Components
import DayTable from './DayTable';



const WeekTable = ({mobile, week, yearData}) => {

    const weekDays = [];
    for(let day of Object.keys(week.data)){
        weekDays.push({[day]: week.data[day]});
    }
    
    return (
        <div className="WeekRow">
            {weekDays.map(day => <DayTable yearData={yearData} key={uuid()} mobile={mobile} day={day} />)}
        </div>
    );
};

export default WeekTable;