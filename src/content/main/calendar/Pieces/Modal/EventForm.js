import React, { useState, useContext } from 'react';

//CSS files
import './EventForm.css';

//Helper Functions && Classes
import userContext from '../../../../../UserContext';
import {Calendar as CalendarApi} from '../../../../../APIs/CalendarApi';
import handleFormChange from '../../../../../helperFuncs/handleFormChange';
import Users from '../../../../../APIs/UsersApi';

const EventForm = ({date, closeModal, currentMonthData, setAddingEvent}) => {

    const {user, setUser} = useContext(userContext);
    const [currentMonth, setCurrentMonth] = currentMonthData;
    
    const INITIAL_STATE = {
        title: '',
        description: '',
        time: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        handleFormChange(setFormData, evt);
    };

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        if(evt.nativeEvent.submitter.innerText === "Add Event"){
            await CalendarApi.addNewEvent(formData, date, user.id);
            closeModal();
            let localUser = Users.getLocalUser();
            setUser(() => localUser);
        };
    };

    const handleCancel = () => {
        setAddingEvent();
    };

    return (
        <form id="addEventForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">
                    Title:
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    placeholder="Event title..."
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">
                    Description:
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    placeholder="Event description..."
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="time">
                    Time:
                </label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    placeholder="Event time..."
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <button>Add Event</button>
                <button onMouseDown={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default EventForm;