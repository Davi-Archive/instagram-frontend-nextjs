import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "../avatar";
import {
  heartFilled as imgCurtido,
  heartOutlined as imgCurtir,
  comment as imgComentarioCinza,
} from "../../public/image";

const Postagem = ({ usuario, fotoDoPost,descricao,comentarios }: any) => {
  return (
    <div className="postagem">
      <Link href={`/perfil/${usuario?.id}`} className="link">
        <section className="cabecalhoPostagem">
          <Avatar src={usuario.avatar} />
          <strong>{usuario.nome}</strong>
        </section>
      </Link>
      <div className="fotoDaPostagem">
        <img src={fotoDoPost} alt="Post Image" />
      </div>

      <div className="rodapeDaPostagem">
        <div className="acoesDoRodapeDaPostagem">
          <Image
            src={imgCurtir}
            alt="icone curtir"
            width={20}
            height={20}
            onClick={() => console.log("curtir")}
            style={{marginRight: '10px'}}
          />

          <Image
            src={imgComentarioCinza}
            alt="icone curtir"
            width={20}
            height={20}
            onClick={() => console.log("comentar")}
            style={{marginRight: '10px'}}
          />
          <span className="quantidadeCurtidas">
            Curtido por <strong>32 pessoas</strong>
          </span>
        </div>

        <div className="descricaoDaPostagem">
          <strong className="nomeUsuario">{usuario.nome}</strong>
          <p className="descricao">{descricao}</p>
        </div>
      </div>
      <div className="comentariosDaPublicacao">
        {comentarios.map((c:any, i:any)=>(
            <div className="comentario" key={i}>
                <strong>{c.nome}</strong>
                <p>{c.mensagem}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Postagem;
