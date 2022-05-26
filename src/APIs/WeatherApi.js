import axios from 'axios';
import {BASE_URL} from '../config';

class WeatherApi {
    static errorMessages = {
        1003: 'Please enter a search term.',
        1005: 'Please enter a valid search term.',
        1006: 'No matching location found.',
        9999: 'Looks like there is something trouble completing your request.'
    };

    static async getCurrentWeather(searchQuery){
        try {
            let res = await axios({
                method: 'get',
                url: `${BASE_URL}/weather/current`,
                params: { searchQuery }
            });
            return res.data;
        } catch(err){
            const {data: {error}} = err.response;
            console.error({error: error.message, searchQuery});
            return error.code;
        }
        
    } 
}

export default WeatherApi;