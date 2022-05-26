import React from 'react';
import {v4 as uuid} from 'uuid';

//CSS files
import './NotesMainMenu.css';

//Components
import NotesDivMain from './NotesDivMain';

const NotesMainMenu = ({handleSort, user, notes, handleAddNote}) => {

    return (
        <div id="notesMain">
            <h1 id='notesMainHeader'>Notes</h1>
            <hr />
            {user ? null : <p className='noUserMessage'>Warning: You are not logged in. Any notes created will only be temporarily saved.</p>}
            <div id='notesMainContainer'>
                {notes.length > 0 ?
                <div id='mainNoteSortSelects'>
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
                <div id='notesMainDivContainer'>
                    <div id='userNotesMain'>
                        <div onClick={handleAddNote} id='mainNotesAddButton'>+</div>
                        {notes.length > 0 
                            ? notes.map(note => <NotesDivMain note={note} key={uuid()} />)
                            : <p id='mainNoNotes'>You don't have any notes.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotesMainMenu;