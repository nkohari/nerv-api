import { Credentials } from '../structures/Credentials';
export interface GetRequestConfig {
    params?: {
        [name: string]: any;
    };
}
export interface PostRequestConfig {
    data: any;
}
export interface PutRequestConfig {
    data: any;
}
export declare class Requester {
    scheme: string;
    baseUrl: string;
    credentials: Credentials;
    constructor(options?: Partial<Requester>);
    setCredentials(credentials: Credentials): void;
    get(path: string, config?: GetRequestConfig): Promise<any>;
    post(path: string, config: PostRequestConfig): Promise<any>;
    put(path: string, config: PutRequestConfig): Promise<any>;
    getHeaders(): {
        Accept: string;
        'Content-Type': string;
        Authorization: string;
    };
    getUrl(path: any): string;
}
export default Requester;
