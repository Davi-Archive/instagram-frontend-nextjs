import axios from 'axios';

//process.env.NEXT_PUBLIC_API_URL + '/api'

export default class HttpService {
    constructor() {
        //@ts-ignore
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + '/api'
        })
        //@ts-ignore
        this.axios.interceptors.request.use((config: any) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`
            }
            return config;
        })
    }
    async post(url: any, data: any) {
        //@ts-ignore
        const res = await this.axios.post(url, data);
        return res;
    }
    async get(url: any) {
        //@ts-ignore
        return await this.axios.get(url)
    }
    async put(url:any,data:any){
        //@ts-ignore
        return await this.axios.put(url, data)
    }

}