import { State } from "./State";

export default interface Domain {
    lastChanged?: Date;
    id: number;
    name: string;
    idServer: number;
    idType: number;
    idLenguage: string;
    state: State;
    version?: string;
};