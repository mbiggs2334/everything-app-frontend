import React, { useState, useContext } from 'react';

//CSS files
import './EventForm.css';

//Helper Functions && Classes
import userContext from '../../../../../UserContext';
import {Calendar as CalendarApi} from '../../../../../APIs/CalendarApi';
import handleFormChange from '../../../../../helperFuncs/handleFormChange';
import Users from '../../../../../APIs/UsersApi';

const EditEventForm = ({eventDetails, toggleEditEventForm, modalData, setEventDetails}) => {

    const {user, setUser} = useContext(userContext);
    
    const INITIAL_STATE = {
        title: eventDetails.title,
        description: eventDetails.description,
        time: eventDetails.time
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        handleFormChange(setFormData, evt);
    };

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        if(formData.title === '' || formData.description === '' || formData.time === ''){
            window.alert("Please make sure all fields are filled out");
            return;
        };
        if(evt.nativeEvent.submitter.innerText === "Update Event"){
            let date = `${modalData.month}/${modalData.day}/${modalData.year}`;
            setEventDetails(() => ({id: eventDetails.id, ...formData}));
            await CalendarApi.updateEvent(formData, date, user.id, eventDetails.id);
            let localUser = Users.getLocalUser();
            setUser(() => localUser);
            toggleEditEventForm();
        }
    };

    const handleCancel = () => {
        toggleEditEventForm();
    };

    return (
        <form id="editEventForm" onSubmit={handleSubmit}>
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
                <button>Update Event</button>
                <button onMouseDown={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default EditEventForm;