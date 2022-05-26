import React from 'react';
import {v4 as uuid} from 'uuid';

//CSS files
import './NotesMobileMenu.css';

//Components
import NotesDivMobile from './NotesDivMobile';

const NotesMobileMenu = ({handleSort, user, notes, handleAddNote}) => {

    return (
        <div id="notesMobile">
            <h1 id='notesMobileHeader'>Notes</h1>
            <hr />
            {user ? null : <p id='noUserMessage'>Warning: You are not logged in. Any notes created will only be temporarily saved.</p>}
            <div id='notesMobileContainer'>
                {notes.length > 0 ?
                <div id='mobileNoteSortSelects'>
                    <label htmlFor='sortNotes'>Sort by: </label>
                    <select onChange={handleSort} id='sortNotes'>
                        <option>Recent</option>
                        <option>Date Created</option>
                    </select>
                    <select onChange={handleSort} id='sortNotesAge'>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>
                </div>
                : null }
                <div id='notesMobileDivContainer'>
                    <div id='userNotesMobile'>
                        <div onClick={handleAddNote} id='mobileNotesAddButton'>+</div>
                        {notes.length > 0 
                            ? notes.map(note => <NotesDivMobile note={note} key={uuid()} />)
                            : <p id='mobileNoNotes'>You don't have any notes.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotesMobileMenu;