import React, { useState } from 'react';

//Components
import EditEventForm from './EditEventForm';
import DeleteEvent from './DeleteEvent';

//Helper functions && Classes
import {timePrettifierWithMinutes} from '../../../../../helperFuncs/regexFuncs';
import useBooleanHook from '../../../../../helperFuncs/booleanHook';

const EventDetails = ({eventDetails, modalData, closeModal, setShowingEventDetails}) => {

    const [editEvent, setEditEvent] = useBooleanHook(false);
    const [deleteEvent, setDeleteEvent] = useBooleanHook(false);
    const [eventDetailsState, setEventDetailsState] = useState({...eventDetails});

    const handleClick = (evt) => {
        if(evt.target.className.indexOf("fa-pen-to-square") !== -1){
            setEditEvent();
        };
        if(evt.target.className.indexOf("fa-trash-can") !== -1){
            setDeleteEvent();
        };
        if(evt.target.className.indexOf("fa-circle-arrow-left") !== -1){
            setShowingEventDetails();
        };
    };

    const toggleEditEventForm = () => {
        setEditEvent();
    };

    return (
        <>
        {editEvent
        ? <EditEventForm setEventDetails={setEventDetailsState} modalData={modalData} toggleEditEventForm={toggleEditEventForm} eventDetails={eventDetailsState} />
        : deleteEvent
        ?   <DeleteEvent closeModal={closeModal} eventDetailsState={eventDetailsState} toggleDelete={setDeleteEvent}/>
        : <>
            
            <div onClick={handleClick} className="EventDetailsOptions">
                <div>
                    <i className="fa-solid fa-circle-arrow-left"></i>
                </div>
                <div>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <div className="EventDetails">
                <div>Title: {eventDetailsState.title}</div>
                <div>Time: {timePrettifierWithMinutes(eventDetailsState.time)}</div>
                <div>Description: {eventDetailsState.description}</div>
            </div>
        </>
        }
        
        </>
        
    );
};

export default EventDetails;