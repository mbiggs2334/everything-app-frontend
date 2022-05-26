import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

//CSS files
import './NotesDivMain.css';

const NotesDivMain = ({note}) => {
    const {dateCreated, id} = note;
    let {content} = note;
    content = [...content.split(/<\/*\w*>/)].filter( val => val !== '' ? val : null).join(' ');
    
    return (
        <div id='notesMainDiv'>
            <Link to={`/notes/${id}`}>
                <div id='notesMainDivTitleDate'>
                    <span id='notesMainContent'>{content}</span>
                    <div id='noteMainDate'>{moment(dateCreated).local().format('MM/DD/YYYY')}</div>
                </div>
            </Link>
        </div>
    )
};

export default NotesDivMain;