
export default interface Server {
    lastChanged?: Date;
    id?: number;
    name: string;
    provider?: string;
    ip: string;
    webUser: string;
    webPass: string;
    ftpUser: string;
    ftpPass: string;
};