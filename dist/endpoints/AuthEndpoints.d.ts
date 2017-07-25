import { ApiClient } from '../ApiClient';
import { Credentials } from '../structures/Credentials';
export interface LoginPayload {
    username: string;
    password: string;
}
export interface CreateUserPayload {
    username: string;
    password: string;
    email: string;
    agentid: string;
}
export declare class AuthEndpoints {
    client: ApiClient;
    constructor(client: ApiClient);
    login(data: LoginPayload): Promise<Credentials>;
    getToken(): Promise<Credentials>;
    createUser(data: CreateUserPayload): Promise<Credentials>;
}
