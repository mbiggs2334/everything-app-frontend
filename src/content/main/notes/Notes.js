import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

//Components
import NotesMobileMenu from './notesMobile/NotesMobileMenu';
import NotesMainMenu from './notesMain/NotesMainMenu';

//Functions & Classes & Helpers
import userContext from '../../../UserContext';
import NotesApi from '../../../APIs/NotesApi';
import SortNotes from './Classes/SortNotes';

const Notes = () => {
    const history = useHistory();
    const {user, setUser} = useContext(userContext);
    const [notes, setNotes] = useState(NotesApi.getAllNotes().sort(sortRecent));
    
    const handleAddNote = async () => {
        let noteInfo = await NotesApi.newNote();
        history.push(`/notes/${noteInfo.id}`);
    };

    function sortRecent(a, b){
        return (a.lastModified > b.lastModified) ? -1 : ((a.lastModified > b.lastModified) ? 1 : 0);
    };

    const handleSort = () => {
        const sortType = document.getElementById('sortNotes').value;
        const age = document.getElementById('sortNotesAge').value;
        SortNotes.sort(setNotes, age, sortType);
    };

    return (
        <>  
            <NotesMobileMenu handleAddNote={handleAddNote} notes={notes} user={user} handleSort={handleSort} />
            <NotesMainMenu handleAddNote={handleAddNote} notes={notes} user={user} handleSort={handleSort} />
        </>
    )
};

export default Notes;