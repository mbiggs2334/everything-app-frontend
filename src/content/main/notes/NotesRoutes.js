import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Note from './notesMobile/Note';
import NoteMain from './notesMain/NoteMain';

const NotesRoutes = () => {

    return (
        <Switch>
            <Route path='/notes/:id'><Note /><NoteMain /></Route>
        </Switch>
    )
};

export default NotesRoutes;