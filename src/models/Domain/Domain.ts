import { State } from "./State";
import Server from '../Server/Server';
import Type from '../Type/Type';
import Language from '../Language/Language';

export default interface Domain {
    lastChanged?: Date;
    id: number;
    name: string;
    server: Server;
    type: Type;
    lenguage: Language;
    state: State;
    version?: string;
};