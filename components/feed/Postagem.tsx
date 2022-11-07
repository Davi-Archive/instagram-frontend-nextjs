import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Avatar from "../avatar";
import {
  heartFilled as imgCurtido,
  heartOutlined as imgCurtir,
  comment as imgComentarioCinza,
} from "../../public/image";
import FazerComentario from "./FazerComentario";

const tamanhoLimiteDescricao = 90;

const Postagem = ({ usuario, fotoDoPost, descricao, comentarios,usuarioLogado }: any) => {
 const [deveExibirSecaoParaComentar, setDeveExibirSecaoParaComentar] = useState(false)
  const [tamanhoAtualDaDescricao, setTamanhoAtualDaDescricao] = useState(
    tamanhoLimiteDescricao
  );

  const descricaoMaiorQueLimite = () => {
    return descricao.length > tamanhoAtualDaDescricao;
  };

  const obterDescricao = () => {
    let mensagem = descricao.substring(0, tamanhoAtualDaDescricao);

    if (descricaoMaiorQueLimite()) {
      mensagem += "...";
    }

    return mensagem;
  };

  const exibirDescricaoCompleta = () => {
    setTamanhoAtualDaDescricao(Number.MAX_SAFE_INTEGER);
  };

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
            style={{ marginRight: "10px" }}
          />

          <Image
            src={imgComentarioCinza}
            alt="icone curtir"
            width={20}
            height={20}
            onClick={() =>
              setDeveExibirSecaoParaComentar(!deveExibirSecaoParaComentar)
            }
            style={{ marginRight: "10px" }}
          />
          <span className="quantidadeCurtidas">
            Curtido por <strong>32 pessoas</strong>
          </span>
        </div>

        <div className="descricaoDaPostagem">
          <strong className="nomeUsuario">{usuario.nome}</strong>
          <p className="descricao">
            {obterDescricao()}
            {descricaoMaiorQueLimite() && (
              <span
                onClick={exibirDescricaoCompleta}
                className="exibirDescricaoCompleta"
              >
                mais
              </span>
            )}
          </p>
        </div>
        <div className="comentariosDaPublicacao">
          {comentarios.map((c: any, i: any) => (
            <div className="comentario" key={i}>
              <strong>{c.nome}</strong>
              <p>{c.mensagem}</p>
            </div>
          ))}
        </div>
      </div>

      {deveExibirSecaoParaComentar && (
        <FazerComentario usuarioLogado={usuarioLogado} />
      )}
    </div>
  );
};

export default Postagem;
