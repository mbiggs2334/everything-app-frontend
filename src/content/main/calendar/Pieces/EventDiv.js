import React from 'react';

//CSS files
import './EventDiv.css';

const EventDiv = ({eventInfo, showEvent}) => {

    const handleClick = (evt) => {
        showEvent(eventInfo);
    };

    return(
        <div onClick={handleClick} className="EventDiv">
            {eventInfo.title}
        </div>
    );
};

export default EventDiv;