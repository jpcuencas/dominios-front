import axios from 'axios';
import console from '../config/logger';
import config from '../config/dot-env';

let urlResource ='domains';
export const loadResources = async (page: string, offset: string) => {
    let res: any;
    try {
        res = await axios.get(`${config.serverUrl}/${urlResource}?page=${page}&offset=${offset}`);
    } catch(error) {
        console.error(error);
    }
    return res?.data;
};

export const loadResource = async (id:number) => {
    let res: any;
    try {
        res = await axios.get(`${config.serverUrl}/${urlResource}/${id}`);
    } catch(error) {
        console.error(error);
    }
    return res?.data;
};

export const insertResource = async (body: any) => {
    let res: any;
    try {
        res = await axios.post(`${config.serverUrl}/${urlResource}`, {
            data: body
        });
    } catch(error) {
        console.error(error);
    }
    return res?.data;
};

export const updateResource = async (body: any) => {
    let res: any;
    try {
        res = await axios.put(`${config.serverUrl}/${urlResource}`, {
            data: body
        });
    } catch(error) {
        console.error(error);
    }
    return res?.data;
};

export const deleteResource = async (id: number) => {
    let res: any;
    try {
        res = await axios.delete(`${config.serverUrl}/${urlResource}/${id}`);
    } catch(error) {
        console.error(error);
    }
    return res?.data;
};
