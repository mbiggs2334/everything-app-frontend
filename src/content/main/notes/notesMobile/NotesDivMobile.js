import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

//CSS files
import './NotesDivMobile.css';

const NotesDivMobile = ({note}) => {
    const {dateCreated, id} = note;
    let {content} = note;
    content = [...content.split(/<\/*\w*>/)].filter( val => val !== '' ? val : null).join(' ');
    
    return (
        <div id='notesMobileDiv'>
            <Link to={`/notes/${id}`}>
                <div id='notesMobileDivTitleDate'>
                    <span id='notesMobileContent'>{content}</span>
                    <div id='noteMobileDate'>{moment(dateCreated).local().format('MM/DD/YYYY')}</div>
                </div>
            </Link>
        </div>
    )
};

export default NotesDivMobile;