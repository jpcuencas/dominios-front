import axios from 'axios';
import console from '../config/logger';
import config from '../config/dot-env';

export const loadServers = async (page: string, offset: string) => {
    let res: any;
    try {
        res = await axios.get(`${config.serverUrl}/servers?page=${page}&offset=${offset}`);
    } catch(error) {
        console.error(error);
    }
    return res?.data;
};
