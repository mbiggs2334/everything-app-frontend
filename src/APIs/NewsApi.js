import axios from 'axios';
import {BASE_URL} from '../config';

class News {
    static async getNews(skip){
        let response = await axios({
            method: 'GET',
            url: `${BASE_URL}/news/get`,
            params: {skip}
        });
        return response;
    }
}

export default News;