import HttpService from "./HttpService";
import { avatar } from "../public/image";

export default class ApiUsuarioService extends HttpService {
    async login(credenciais: any) {
       const res = await this.post('/login', credenciais)
       console.log(res.data)

        localStorage.setItem("name",res.data.name);
        localStorage.setItem("email",res.data.email);
        localStorage.setItem("token",res.data.token);
        if (res.data.avatar){
            localStorage.setItem("avatar",res.data.avatar);
        }


       return res
    }

    async cadastro(dados: any) {
        return await this.post('/cadastro', dados)
    }
}