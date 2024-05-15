import axios, { AxiosInstance, Method, AxiosHeaders } from 'axios';
import { PUBLIC_KEY, STORE_ID } from '@/utils/common/constants.ts';

const url = `https://app.ecwid.com/api/v3/${STORE_ID}`;

class APIStoreInstanceClass {
    private _sender: AxiosInstance;

    constructor(url: string) {
        this._sender = axios.create({
            baseURL: url,
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${PUBLIC_KEY}`
            }
        });
    }

    public async send(
        url: string,
        method: Method,
        headers?: AxiosHeaders,
        data?: any,
    ){
        return this._sender.request({
            method,
            url,
            headers,
            data,
        })
    }
}

export const APIStoreInstance = new APIStoreInstanceClass(url);