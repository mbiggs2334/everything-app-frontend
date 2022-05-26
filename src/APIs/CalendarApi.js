import axios from 'axios';
import Users from './UsersApi';
import {BASE_URL} from '../config';

class Calendar {
    static getEventsFromLocalStorage(){
        const events = JSON.parse(localStorage.getItem('user'));
        if(events) return events.events;
        return [];
    }

    static addEventToLocalStorage(events){
        const user = Users.getLocalUser();
        user.events = events;
        localStorage.setItem('user', JSON.stringify(user));
    }

    static async addNewEvent(eventInfo, date, userId){
        try{
            eventInfo = {
                ...eventInfo,
                date,
                userId
            };
            
            let res = await axios({
                method: 'post',
                url: `${BASE_URL}/calendar/new`,
                data: {eventInfo},
                headers: {"authorization": "Bearer " + Users.getToken()}
            });
            let {response} = res.data;
            
            this.addEventToLocalStorage(response);
        } catch(e){
            console.error(e);
            throw new Error(e);
        };
    }

    static async updateEvent(eventInfo, date, userId, eventId){
        try{
            eventInfo = {
                ...eventInfo,
                date,
                userId,
                eventId
            };
            
            let res = await axios({
                method: 'patch',
                url: `${BASE_URL}/calendar/edit`,
                data: {eventInfo},
                headers: {"authorization": "Bearer " + Users.getToken()}
            });
            let {response} = res.data;
            
            this.addEventToLocalStorage(response);
        } catch(e){
            console.error(e);
            throw new Error(e);
        };
    }

    static async deleteEvent(eventId, userId){
        try{
            let eventInfo = {
                eventId,
                userId
            };
            let res = await axios({
                method: 'delete',
                url: `${BASE_URL}/calendar/delete`,
                data: {eventInfo},
                headers: {"authorization": "Bearer " + Users.getToken()}
            });
            let {response} = res.data;
            
            this.addEventToLocalStorage(response);
        } catch(e){
            console.error(e);
            throw new Error(e);
        };
    }

};

export {Calendar};