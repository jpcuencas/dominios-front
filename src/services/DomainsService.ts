import axios from 'axios';
import console from '../config/logger';
import config from '../config/dot-env';

export const loadDomains = async () => {
    let res: any;
    try {
       // res = await axios.get(`${config.serverUrl}/domains`);
    } catch(error) {
        console.error(error);
    }
    return res?.data;
};
