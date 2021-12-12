import AbstractService from './AbstractService';


class ServersService extends AbstractService {

    public  resource:string ='servers';
    constructor() {
        super();
        this.setUrlResource(this.resource);
    }
}

export default ServersService;
