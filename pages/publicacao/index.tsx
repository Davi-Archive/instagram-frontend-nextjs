import Image from "next/image";
import { useState } from "react";
import Button from "../../components/button";
import HeaderComAcoes from "../../components/headerComAcoes";
import UploadImagem from "../../components/uploadImage";
import comAutorizacao from "../../hoc/comAutorizacao";
import { createPost } from "../../public/image";

const Publicacao = () => {
  const [imagem, setImagem] = useState(true);
  const [inputImagem, setInputImagem] = useState();
  return (
    <>
      <div className="paginaPublicacao largura30pctDesktop">
        <HeaderComAcoes
          textoEsquerda="Cancelar"
          elementoDireita="Avançar"
          titulo="Nova Publicacao"
        />

        <hr className="linhaDivisoria" />

        <div className="conteudoPaginaPublicacao">
          <div className="primeiraEtapa">
            <UploadImagem
              setImagem={setImagem}
              aoSetarAReferencia={setInputImagem}
              imagemPreviewClassName={!imagem ? "previewImagemPublicacao" : "previewImagemSelecionada"}
              //@ts-ignore -- typescript has no access to dom
              imagemPreview={imagem?.preview || createPost.src}
            />

            <span className="desktop textoDragAndDrop">
              Arraste sua foto aqui!
            </span>

            <Button
              type="button"
              text="Selecionar Imagem"
              //@ts-ignore -- use ref other component
              onClick={() => inputImagem.click()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default comAutorizacao(Publicacao);
