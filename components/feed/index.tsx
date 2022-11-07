import { useState, useEffect } from "react";
import FeedService from "../../services/FeedService";
import Postagem from "./Postagem";


const feedService = new FeedService();

const Feed = ({ usuarioLogado }: any) => {
  const [listaDePostagens, setListaDePostagens] = useState<any>([]);

  const getFeed = async () =>{
    const { data } = await feedService.carregarPostagem();
      console.log(data.result);
    const postagensFormatadas = data.result.map((postagem: any) =>(
      {
        id: postagem._id,
        usuario: {
          id: postagem.userId,
          nome: postagem.usuario.nome,
          avatar: postagem.usuario.avatar
        },
        fotoDoPost: postagem.foto,
        descricao: postagem.descricao,
        curtidas: postagem.likes,
        comentarios: postagem.comentarios.map((c:any)=>({
          nome: c.nome,
          mensagem: c.comentario
        }))
      }
    ));
    console.log(postagensFormatadas);
    setListaDePostagens(postagensFormatadas);

  }

  useEffect(() => {
    getFeed();
    console.log("carregar o feed");
  }, [usuarioLogado]);


  return (
    <div className="feedContainer largura30pctDesktop">
      {listaDePostagens.map((dadosPostagem: any, index: number) => (
        <Postagem {...dadosPostagem} key={index} usuarioLogado={usuarioLogado} />
      ))}
    </div>
  );
};

export default Feed;
