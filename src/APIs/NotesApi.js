import axios from 'axios';
import Users from './UsersApi';
import {BASE_URL} from '../config';

class NotesApi {
    static initial_state = {
        id: null,
        content: '',
        dateCreated: '',
        lastModified: '',
    }

    static getAllNotes(){
        const notes = JSON.parse(localStorage.getItem('user'));
        if(notes) return notes.notes;
        return [];
    }

    static getSpecificNote(id){
        let returnNote;
        const notes = this.getAllNotes();
        for(let note of notes){
            if(note.id === parseInt(id)) returnNote = note;
        };
        if(returnNote) return returnNote;
        throw new Error('Note not found');
    }

    static saveNoteToLocalStorage(incNote){
        const user = Users.getLocalUser();
        for(let i = 0; i < user.notes.length; i++){
            if(user.notes[i].id === incNote.id){
                user.notes[i] = incNote;
                localStorage.setItem('user', JSON.stringify(user));
            };
        };
    }

    static addNewNoteToStorage(user, noteInfoFromServer){
        let newNote = this.initial_state
        newNote.id = noteInfoFromServer.id;
        newNote.dateCreated = noteInfoFromServer.dateCreated;
        newNote.lastModified = noteInfoFromServer.lastModified;
        user.notes.push(newNote);
        localStorage.setItem('user', JSON.stringify(user));
    }

    static async newNote(){
        const user = Users.getLocalUser();
        let today = new Date().toISOString();
        today.replace('GMT', "UTC");
        try{
            let {data: {response}} = await axios({
                method: 'post',
                url: `${BASE_URL}/notes/new`,
                data: {user, date: today},
                headers: {"authorization": "Bearer " + Users.getToken()}
            });
            this.addNewNoteToStorage(user, response);
            return response;
        } catch(e){
            console.error(e);
        }
    }

    static async updateServerNote(incNote){
        const user = JSON.parse(localStorage.getItem('user'));
        let date = new Date().toISOString();
        let response = await axios({
            method: 'patch',
            url: `${BASE_URL}/notes/update`,
            data: {
                note: incNote,
                userId: user.id,
                date
            },
            headers: {"authorization": "Bearer " + Users.getToken()}
        });
        incNote.lastModified = date;
        this.saveNoteToLocalStorage(incNote);
    }

    static async deleteNote(id){
        let user = Users.getLocalUser();
        let response = await axios({
            method: 'delete',
            url: `${BASE_URL}/notes/delete`,
            data: {
                noteId: id,
                userId: user.id
            },
            headers: {"authorization": "Bearer " + Users.getToken()}
        });
        this.removeNoteFromLocalStorage(user, id);
        return response
    }

    static removeNoteFromLocalStorage(user, id){
        const notes = user.notes;
        for(let i = 0; i < notes.length; i++){
            if(notes[i].id == id){
                notes.splice(i, 1);
                break;
            };
        };
        localStorage.setItem('user', JSON.stringify(user));
    }

};

export default NotesApi;