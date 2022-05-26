import axios from 'axios';
import {BASE_URL} from '../config';

class Crypto {
    static async getMarketValues(id, currency){
        try{
            let res = await axios({
                method: 'get',
                url: `${BASE_URL}/crypto/marketvalue`,
                params: {id, currency}
            })
            return res.data.response;
        } catch(e){
            return e.response.data
        };
    }
};

export {Crypto};