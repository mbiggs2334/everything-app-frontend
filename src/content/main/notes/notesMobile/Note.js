import React, { useRef, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

//CSS files
import './Note.css';

//Components
import RemoveNoteModal from '../RemoveNoteModal';
import SavingMessage from './SavingMessage';

//Functions & Classes & Helpers
import NotesApi from '../../../../APIs/NotesApi';
import useBooleanHook from '../../../../helperFuncs/booleanHook';

const Note = () => {
    const history = useHistory();
    const {id} = useParams();

    const note = useRef();
    note.current = NotesApi.getSpecificNote(id)

    const timeout = useRef();
    const savingRef = useRef();
    
    const [showDeleteModal, setShowDeleteModal] = useBooleanHook(false);


    const handleChange = (evt) => {
        note.current = {
            ...note.current,
            content: evt.target.innerHTML
        };
        async function updateNote(){
            return NotesApi.updateServerNote(note.current);
        };
        if(timeout.current) clearInterval(timeout.current);
        timeout.current = setTimeout(async() => {
            await updateNote()
            .then(() => savingRef.current.setIsSaving())
            .catch(data => console.error(data));
        }, 2500);
    };


    useEffect(() => {
        return function cleanup(){
            clearInterval(timeout.current);
        };
    });
    

    const toggleModal = () => {
        document.getElementsByTagName('body')[0].classList.toggle('noscroll');
        setShowDeleteModal();
    };


    const confirmRemove = async() => {
        await NotesApi.deleteNote(id);
        history.push('/notes');
    };

    return(
        <>
        {showDeleteModal ? <RemoveNoteModal confirmRemove={confirmRemove} cancelRemove={toggleModal} /> : null}
        <div id='mobileNoteContainer'>
            <div id='mobileNoteHeader'>
                <Link to="/notes"><i className="fa-solid fa-chevron-left"></i></Link>
                <SavingMessage ref={savingRef} note={note.current} />
                <i onClick={toggleModal} title='Delete post' className="fa-solid fa-trash"></i>
            </div>
    
            <div id='mobileNotePad'>
                <div contentEditable='true' dangerouslySetInnerHTML={{__html: note.current.content}} onInput={handleChange} id='mobileNoteTextArea' name='content'></div>
            </div>
        </div>
        </>
    )
};

export default Note;