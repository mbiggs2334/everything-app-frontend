import React, { useEffect } from 'react';

//CSS files
import './RemoveNoteModal.css';

const RemoveNoteModal = ({cancelRemove, confirmRemove}) => {

    const handleConfirm = () => {
        confirmRemove();
    };

    const handleCancel = () => {
        cancelRemove();
    };

    useEffect(()=> {
        return () => document.getElementsByTagName('body')[0].classList.remove('noscroll');
    });

    return (
        <div id='removeNoteModal'>

            <div id='removeNoteModalContent'>
                <h2>Delete Note?</h2>
                <p>Are you sure you want to delete this note? This action cannot be undone.</p>
                <div id='removeNoteModalButtons'>
                    <button onClick={handleConfirm} id='confirmDeleteNote'>Confirm</button>
                    <button onClick={handleCancel} id='cancelDeleteNote'>Cancel</button>
                </div>
            </div>

        </div>
    )
};

export default RemoveNoteModal;