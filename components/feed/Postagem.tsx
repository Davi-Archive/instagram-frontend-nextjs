import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Avatar from "../avatar";
import {
  heartFilled as imgCurtido,
  heartOutlined as imgCurtir,
  comment as imgComentarioCinza,
  commentActive as imgComentarioAtivo,
} from "../../public/image";
import FazerComentario from "./FazerComentario";
import { toast } from "react-toastify";
import FeedService from "../../services/FeedService";

const feedService = new FeedService();
const tamanhoLimiteDescricao = 90;

const Postagem = ({
  id,
  usuario,
  fotoDoPost,
  descricao,
  comentarios,
  usuarioLogado,
  curtidas
}: any) => {
  const [deveExibirSecaoParaComentar, setDeveExibirSecaoParaComentar] =
    useState(false);
  const [tamanhoAtualDaDescricao, setTamanhoAtualDaDescricao] = useState(
    tamanhoLimiteDescricao
  );
  const [comentariosPostagem, setComentariosPostagem] = useState(comentarios);

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

  const comentar = async (comentario: any) => {
    try {
      const { data } = await feedService.adicionarComentario(id, comentario);
      setComentariosPostagem([
        ...comentariosPostagem,
        {
          nome: usuarioLogado.nome,
          mensagem: comentario
        }
      ])
      toast.success(data.msg, { autoClose: 3000 });
    } catch (error) {
      console.log(error);
      toast.error("Erro ao comentar", { autoClose: 2000 });
    }
    return Promise.resolve(true);
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
            style={{ marginRight: "10px", cursor: "pointer" }}
          />

          <Image
            src={
              deveExibirSecaoParaComentar
                ? imgComentarioAtivo
                : imgComentarioCinza
            }
            alt="icone curtir"
            width={20}
            height={20}
            onClick={() =>
              setDeveExibirSecaoParaComentar(!deveExibirSecaoParaComentar)
            }
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
          <span className="quantidadeCurtidas">
            Curtido por <strong>{curtidas.length}</strong>
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
          {comentariosPostagem.map((c: any, i: any) => (
            <div className="comentario" key={i}>
              <p>
                <strong>{c.nome}</strong>
                {c.mensagem}
              </p>
            </div>
          ))}
        </div>
      </div>

      {deveExibirSecaoParaComentar && (
        <FazerComentario comentar={comentar} usuarioLogado={usuarioLogado} />
      )}
    </div>
  );
};

export default Postagem;
