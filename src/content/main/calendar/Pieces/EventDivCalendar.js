import React from 'react';

//CSS files
import './EventDiv.css';

const EventDivCalendar = ({eventInfo}) => {
    return(
        <span className="EventDivCalendar">
            {eventInfo.title}
        </span>
    );
};

export default EventDivCalendar;