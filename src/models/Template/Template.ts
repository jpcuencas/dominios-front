import Type from '../Type/Type';

export default interface Template {
    lastChanged?: Date;
    id: number;
    name: string;
    type: Type;
    description?: string;
};