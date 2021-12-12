import axios from 'axios';
import console from '../config/logger';
import config from '../config/dot-env';

let urlResource ='';

class AbstractService {
    constructor(){
        //build
     }

    protected getUrlResource =  () => {
     return urlResource;
    }
    protected setUrlResource =  (url: string) => {
      urlResource = url;
    }

    public async loadResources () {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${urlResource}`);
        } catch(error) {
            console.error(error);
        }
        return res?.data;
    };

    public async loadResourcesPagination (page: string, offset: string)  {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${urlResource}?page=${page}&offset=${offset}`);
        } catch(error) {
            console.error(error);
        }
        return res?.data;
    };

    public loadResource = async (id:number) => {
        let res: any;
        try {
            res = await axios.get(`${config.serverUrl}/${urlResource}/${id}`);
        } catch(error) {
            console.error(error);
        }
        return res?.data;
    };

    public insertResource = async (body: any) => {
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

    public updateResource = async (body: any) => {
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

    public deleteResource = async (id: number) => {
        let res: any;
        try {
            res = await axios.delete(`${config.serverUrl}/${urlResource}/${id}`);
        } catch(error) {
            console.error(error);
        }
        return res?.data;
    };
}
export default AbstractService;
