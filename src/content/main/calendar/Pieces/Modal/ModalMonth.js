import React from 'react';
import {v4 as uuid} from 'uuid';

//Helper functions && Classes
import CalendarData from '../../YearData';

const ModalMonth = ({modalData, calendarData}) => {

    let months = [];

    for(let monthInfo of Object.keys(calendarData.yearData)){
        months.push({
            month: calendarData.yearData[monthInfo].string,
            monthIndex: monthInfo
        });
    };

    return (
        <div id="MonthSelector">
            {months.map(month => <div key={uuid()} data-month={true} data-index={month.monthIndex}>{month.month}</div>)}
        </div>
    );
};

export default ModalMonth;