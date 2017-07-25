import { User } from './User';
export declare class Credentials {
    token: string;
    user: User;
    constructor(data?: Partial<Credentials>);
}
