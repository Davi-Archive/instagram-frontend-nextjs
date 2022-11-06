import axios from 'axios';

//process.env.NEXT_PUBLIC_API_URL + '/api'

export default class HttpService {
    constructor() {
        //@ts-ignore
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + '/api'
        })
    }
    async post(url:any, data:any) {
        //@ts-ignore
        const res = await this.axios.post(url, data);
       return res;
    }
}