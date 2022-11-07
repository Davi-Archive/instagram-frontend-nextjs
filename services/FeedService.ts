import HttpService from "./HttpService";

export default class FeedService extends HttpService {
  async carregarPostagem(idUsuario?:any) {
    let url ='/feed'
    if(idUsuario){
        url += `?id=${idUsuario}`
    }
    return await this.get(url);
  }

  async adicionarComentario(idPostagem:any,comentario:any){
     return await this.put(`/comments?id=${idPostagem}`,{comentario})
  }

}
