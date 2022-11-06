import HttpService from "./HttpService";

export default class ApiUsuarioService extends HttpService {
    async login(credenciais: any) {
        const res = await this.post('/login', credenciais)

        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("token", res.data.token);

        const usuario = await this.get('/usuario');
        console.log(usuario);
        localStorage.setItem('id', usuario.data._id);

        if (usuario.data.avatar) {
            localStorage.setItem("avatar", usuario.data.avatar);
        }


        return res
    }

    async cadastro(dados: any) {
        return await this.post('/cadastro', dados)
    }

    estaAuthenticado() {
        return localStorage.getItem('token') !== null;
    }

    async pesquisa(termoDaPesquisa: any) {
        return this.get('/pesquisa?filtro=' + termoDaPesquisa)
    }

    obterInformacoesDoUsuarioLogado(){
        return {
            id: localStorage.getItem('id'),
            nome: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            avatar: localStorage.getItem('avatar')
        }
     }
}