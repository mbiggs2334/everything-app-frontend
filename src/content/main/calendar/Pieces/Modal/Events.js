import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

//Components
import EventDiv from '../EventDiv';
import EventDetails from './EventDetails';

//Helper Functions && Classes
import useGetEvents from '../../GetEvents';
import useBooleanHook from '../../../../../helperFuncs/booleanHook';

const Events = ({toggleForm, modalData, closeModal}) => {

    const [showingEventDetails, setShowingEventDetails] = useBooleanHook(false);
    const [eventDetails, setEventDeatils] = useState({});

    const todayEvents = useGetEvents({
        year: modalData.year,
        month: modalData.month
    }, modalData.day);

    const handleClick = () => {
        toggleForm();
    };

    const showEventDetails = (eventInfo) => {
        setEventDeatils(() => ({...eventInfo}));
        setShowingEventDetails();
    };

    return (
        <div className="EventWrapper">
            {showingEventDetails 
            ? <EventDetails setShowingEventDetails={setShowingEventDetails} closeModal={closeModal} modalData={modalData} eventDetails={eventDetails} />
            : todayEvents.length > 0
                ?   <div className="EventsList">{todayEvents.map(event => <EventDiv showEvent={showEventDetails} key={uuid()} eventInfo={event} />)}</div>
                :   <div id="NoEventsDiv">
                        You have no events on this day.
                    </div>
            }
            {showingEventDetails ? null : <div className="AddEventButton" onClick={handleClick}><i className="fa-solid fa-circle-plus"></i></div>}
        </div>
    );
};

export default Events;