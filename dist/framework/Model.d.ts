import { Identifiable } from './Identifiable';
export declare abstract class Model implements Identifiable {
    id: string;
    created: Date;
    updated: Date;
    deleted: Date;
    version: number;
    constructor(data?: Partial<Model>);
}
