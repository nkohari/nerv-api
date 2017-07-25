import { HasIdentifier } from './HasIdentifier';
export declare abstract class Model implements HasIdentifier {
    id: string;
    created: Date;
    updated: Date;
    deleted: Date;
    version: number;
    constructor(data?: Partial<Model>);
}
