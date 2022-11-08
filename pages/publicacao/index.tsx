import Image from "next/image";
import { useState } from "react";
import Button from "../../components/button";
import HeaderComAcoes from "../../components/headerComAcoes";
import UploadImagem from "../../components/uploadImage";
import comAutorizacao from "../../hoc/comAutorizacao";
import { createPost } from "../../public/image";

const Publicacao = () => {
  const [imagem, setImagem] = useState();
  const [inputImagem, setInputImagem] = useState();
  return (
    <>
      <div className="paginaPublicacao largura30pctDesktop">
        <HeaderComAcoes
          textoEsquerda="Cancelar"
          elementoDireita="Avançar"
          titulo="Nova Publicacao"
        />
      </div>
      <div className="conteudoPaginaPublicacao largura30pctDesktop">
        <div className="primeiraEtapa">
          <UploadImagem
            setImagem={setImagem}
            aoSetarAReferencia={setInputImagem}
            imagemPreviewClassName={imagem ? "previewImagemPublicacao" : ""}
            //@ts-ignore -- typescript has no access to dom
            imagemPreview={imagem?.preview || createPost.src}
          />

          <span className="desktop textoDragAndDrop">Arraste sua foto aqui!</span>


          <Button
            type="button"
            text="Selecionar Imagem"
            onClick={() => console.log("manipular clique")}
          />
        </div>
      </div>
    </>
  );
};

export default comAutorizacao(Publicacao);
