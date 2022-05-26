import React from 'react';

//Components
import EventForm from './EventForm';
import Events from './Events';

//Helper functions && Classes
import useBooleanHook from '../../../../../helperFuncs/booleanHook';

const ModalEvent = ({modalData, calendarData, closeModal, currentMonthData}) => {
    
    const [addingEvent, setAddingEvent] = useBooleanHook(false);

    const toggleAddEventForm = () => {
        setAddingEvent();
    };

    return (
        <>
                <h1>{calendarData.yearData[modalData.month].string}, {modalData.day}</h1>
                <h2>{modalData.year}</h2>
                <div>
                    {addingEvent
                    ? <EventForm setAddingEvent={setAddingEvent} currentMonthData={currentMonthData} closeModal={closeModal} date={`${modalData.month}/${modalData.day}/${modalData.year}`} />
                    : <Events closeModal={closeModal} modalData={modalData} toggleForm={toggleAddEventForm}/>
                    }
                </div>
        </>
    );
};

export default ModalEvent;