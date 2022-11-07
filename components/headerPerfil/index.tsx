import React, { useEffect, useState } from "react";
import HeaderComAcoes from "../headerComAcoes";
import { leftArrow } from "../../public/image";
import Avatar from "../avatar";
import Button from "../button";
import { toast } from "react-toastify";
import ApiUsuarioService from "../../services/ApiUsuarioService";
import { useRouter } from "next/router";

const usuarioService = new ApiUsuarioService();

const HeaderPerfil = ({ usuarioLogado, usuario }: any) => {
  const [estaSeguindoOUsuario, setEstaSeguindoOUsuario] = useState(
    usuario.segueEsseUsuario
  );
  const [quantidadeSeguidores, setQuantidadeSeguidores] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (!usuario) return;
    setEstaSeguindoOUsuario(usuario.segueEsseUsuario);
    setQuantidadeSeguidores(usuario.seguidores);
  }, [usuario]);

  const obterTextoBotaoSeguir = () => {
    if (estaSeguindoOUsuario) {
      return "Deixar de seguir";
    }
    return "Seguir";
  };

  const obterCorDoBotaoSeguir = () => {
    if (estaSeguindoOUsuario) {
      return "outline";
    }
    return "primary";
  };

  const manipularCliqueBotaoSeguir = async () => {
    try {
      await usuarioService.alterarSeguir(usuario._id);
      setEstaSeguindoOUsuario(!estaSeguindoOUsuario);
      setQuantidadeSeguidores(
        estaSeguindoOUsuario
          ? quantidadeSeguidores - 1
          : quantidadeSeguidores + 1
      );
    } catch (error) {
      console.log(error);
      toast.error("Erro ao seguir usuário", { autoClose: 2000 });
    }
  };

  const aoClicarSetaEsquerda = () => {
    router.back();
  };

  return (
    <>
      <div className="cabecalhoPerfil largura30pctDesktop">
        <HeaderComAcoes
          iconeEsquerda={leftArrow}
          titulo={usuario.nome}
          aoClicarAcaoEsquerda={aoClicarSetaEsquerda}
        />

        <hr />

        <div className="statusPerfil">
          <Avatar src={usuario.avatar} />
          <div className="informacoesPerfil">
            <div className="statusContainer">
              <div className="status">
                <strong>{usuario.publicacoes}</strong>
                <span>Publicações</span>
              </div>

              <div className="status">
                <strong>{quantidadeSeguidores}</strong>
                <span>Seguidores</span>
              </div>

              <div className="status">
                <strong>{usuario.seguindo}</strong>
                <span>Seguindo</span>
              </div>
            </div>
            <Button
              type="button"
              text={obterTextoBotaoSeguir()}
              color={obterCorDoBotaoSeguir()}
              onClick={manipularCliqueBotaoSeguir}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPerfil;
