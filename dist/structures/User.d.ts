import { Model } from '../framework/Model';
export declare class User extends Model {
    username: string;
    email: string;
    currency: string;
    constructor(data?: Partial<User>);
}
