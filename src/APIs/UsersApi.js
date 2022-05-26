import axios from 'axios';
import {BASE_URL} from '../config';

class Users {

    static logoutUser(){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    static getToken(){
        let token = localStorage.getItem('token');
        return token.replaceAll('"', "");
    }

    static getLocalUser(){
        return JSON.parse(localStorage.getItem('user')) || null;
    }

    static async registerUser(userInfo){
        const {username, password, email} = userInfo;
        try {
            let res = await axios({
                method: 'post',
                url: `${BASE_URL}/users/register`,
                data: {username, password, email}
            })
            localStorage.setItem('token', JSON.stringify(res.data.token));
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return res.data;
        } catch(e){
            let returnString;
            if(typeof(e.response.data.error.message[0]) === 'string'){
                returnString = e.response.data.error.message.map(val => {
                    return `<p>${val}</p>`;
                });
                returnString = returnString.join(' ');
                throw new Error(returnString);
            };
           throw new Error(e);
        };
    }

    static async authenticateAndLoginUser(username, password){
        try{
            let res = await axios({
                method: 'post',
                url: `${BASE_URL}/auth/token`,
                data: {username, password}
            });
            localStorage.setItem('token', JSON.stringify(res.data.token));
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return res.data;
        } catch(e){
            const {message} = e.response.data.error;
            console.error({error: message});
            throw new Error(message);
        }
    }

    static async authenticateUserPassword(username, password){
        try {
            let res = await axios({
                method: 'put',
                url: `${BASE_URL}/users/password/verify`,
                data: {username, password}
            });
            return res.data;
        } catch(e){
            if(e.response.data.error.message === 'Invalid username/password.') return {verified: false};
            console.error(e.response.data.error.message);
        }
    }

    static async changeUsername(currentUsername, requestedUsername){
        try {
            const user = this.getLocalUser();
            let res = await axios({
                method: 'patch',
                url: `${BASE_URL}/users/username/edit`,
                data: {currentUsername, requestedUsername, id: user.id}
            });
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return res.data;
        } catch(e){
            return e.response.data.error.message;
        };
    }

    static async changePassword(username, newPassword, id){
        try {
            let res = await axios({
                method: 'patch',
                url: `${BASE_URL}/users/password/edit`,
                data: {username, password: newPassword, id}
            });
            
        } catch(e){
            return e.response.data.error.message;
        };
    }

};

export default Users;