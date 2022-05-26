import React, { useContext } from 'react';

//CSS files
import './DeleteEvent.css';

//Helper functions && Classes
import { Calendar as CalendarApi } from '../../../../../APIs/CalendarApi';
import Users from '../../../../../APIs/UsersApi';
import userContext from '../../../../../UserContext';

const DeleteEvent = ({toggleDelete, eventDetailsState, closeModal}) => {

    const {user, setUser} = useContext(userContext);

    const handleDelete = async(evt) => {
        evt.preventDefault();
        await CalendarApi.deleteEvent(eventDetailsState.id, user.id);
        let localUser = Users.getLocalUser();
        setUser(() => localUser);
        closeModal();
    };

    const handleCancel = (evt) => {
        evt.preventDefault();
        toggleDelete();
    };

    return (
        <div className="DeleteEvent">
            <h2>Confirm Deletion</h2>
            <p>This action cannot be undone, are you sure you want to delete this event?</p>
            <h3>"{eventDetailsState.title}"</h3>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteEvent;