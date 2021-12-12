import AbstractService from "./AbstractService";


class TemplatesService extends AbstractService {

    public  resource:string ='templates';
    constructor() {
        super();
        this.setUrlResource(this.resource);
    }
}

export default TemplatesService;