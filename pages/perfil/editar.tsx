import { useRouter } from "next/router";
import { useState } from "react";
import HeaderComAcoes from "../../components/headerComAcoes";
import UploadImagem from "../../components/uploadImage";
import comAutorizacao from "../../hoc/comAutorizacao";
import { avatar as AvatarPadrao, xCircle as limpar } from "../../public/image";
import Image from "next/image";

const EditarPerfil = () => {
  const router = useRouter();
  const [avatar, setAvatar] = useState();
  const [nome, setNome] = useState("");
  const [inputAvatar, setInputAvatar] = useState();
  const aoClicarAcaoEsquerda = () => {
    router.push("/perfil/eu");
  };

  const abrirSeletorDeArquivos = () => {
    console.log("seletor");
  };

  return (
    <div className="paginaEditarPerfil largura30pctDesktop">
      <div className="conteudoPaginaEditarPerfil">
        <HeaderComAcoes
          titulo={"Editar perfil"}
          textoEsquerda={"Cancelar"}
          elementoDireita={"concluir"}
          aoClicarElementoDireita={() => console.log("acao direita")}
          aoClicarAcaoEsquerda={aoClicarAcaoEsquerda}
        />
      </div>

      <hr className="linhaDivisoria" />

      <div className="edicaoAvatar">
        <UploadImagem
          setImagem={setAvatar}
          imagemPreview={avatar?.preview || AvatarPadrao.src}
          aoSetarAReferencia={setInputAvatar}
        />

        <span onClick={abrirSeletorDeArquivos}>Alterar foto do perfil</span>

        <hr className="linhaDivisoria" />

        <div className="edicaoNome">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e: any) => setNome(e.target.value)}
          />
          <Image
            src={limpar}
            alt="Excluir"
            width={14}
            height={14}
            onClick={() => setNome("")}
          />
        </div>
        <hr className="linhaDivisoria" />
      </div>
    </div>
  );
};

export default comAutorizacao(EditarPerfil);
