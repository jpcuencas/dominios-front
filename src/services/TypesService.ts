import AbstractService from "./AbstractService";


class TypesService extends AbstractService {

    public  resource:string ='types';
    constructor() {
        super();
        this.setUrlResource(this.resource);
    }
}

export default TypesService;