import axios from 'axios';
import console from '../config/logger';
import config from '../config/dot-env';
import AbstractService from './AbstractService';

class DomainsService extends AbstractService {

    public  resource:string ='domains';
    constructor() {
        super();
        this.setUrlResource(this.resource);
    }

    public installDomain = async (id: number) => {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${this.resource}/install/${id}`);
            console.info(res);
        } catch(error) {
            console.error(error);
        }
    }
    
    public updateFilesDomain = async (id: number) => {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${this.resource}/update-files/${id}`);
            console.info(res);
        } catch(error) {
            console.error(error);
        }
    }
    
    public cleanDomain = async (id: number) => {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${this.resource}/clean/${id}`);
            console.info(res);
        } catch(error) {
            console.error(error);
        }
    }

    public eraseConfigDomain = async (id: number) => {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${this.resource}/erase-config/${id}`);
            console.info(res);
        } catch(error) {
            console.error(error);
        }
    }

    public eraseDomain = async (id: number) => {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${this.resource}/erase/${id}`);
            console.info(res);
        } catch(error) {
            console.error(error);
        }
    }
    
    public blockDomain = async (id: number) => {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${this.resource}/block/${id}`);
            console.info(res);
        } catch(error) {
            console.error(error);
        }
    }

    public unblockDomain = async (id: number) => {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${this.resource}/unblock/${id}`);
            console.info(res);
        } catch(error) {
            console.error(error);
        }
    }

}

export default DomainsService;
