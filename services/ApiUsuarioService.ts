import HttpService from "./HttpService";

export default class ApiUsuarioService extends HttpService {
    async login(dados: any) {
        return this.post('/login', dados)
    }

    async cadastro(dados: any) {
        return this.post('/cadastro', dados)
    }
}