import { useState, useEffect } from "react";
import Postagem from "./Postagem";

const Feed = ({ usuarioLogado }: any) => {
  const [listaDePostagens, setListaDePostagens] = useState<any>([]);

  useEffect(() => {
    console.log("carregar o feed");
    setListaDePostagens([
      {
        id: "1",
        usuario: {
          id: "1",
          nome: "Douglas",
          avatar: null,
        },
        fotoDoPost:
          "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        curtidas: [],
        comentarios: [
          {
            nome: "fuulllano",
            mensagem: "muito legal",
          },
          {
            nome: "fuuano",
            mensagem: "muito legal",
          },
          {
            nome: "flllano",
            mensagem: "muito legal",
          },
        ],
      },
      {
        id: "2",
        usuario: {
          id: "2",
          nome: "Douglas",
          avatar: null,
        },
        fotoDoPost:
          "https://cdn.xxl.thumbs.canstockphoto.com.br/cora%C3%A7%C3%A3o-formando-imagem-dois-panor%C3%A2mico-m%C3%A3os-s%C3%ADmbolo-banco-de-fotos_csp23260933.jpg",
        descricao:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        curtidas: [],
        comentarios: [
          {
            nome: "fulano",
            mensagem: "muito legal",
          },
          {
            nome: "fulano esquina",
            mensagem: "muito legal",
          },
          {
            nome: "fulano bacana",
            mensagem: "muito legal",
          },
        ],
      },
    ]);
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
