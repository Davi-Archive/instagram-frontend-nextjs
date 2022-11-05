import Image from "next/image";
import { useRef,useEffect } from "react";
import { UploadImage } from "../../types/UploadImageType";

const UploadImage = ({
  className,
  setImage,
  imagePreview,
  imagemPreviewClassName,
  setRef,
}: UploadImage) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!setRef) return;

    setRef(inputRef?.current);
  }, [inputRef?.current]);


  const abrirSeletorArquivos = () => {
    //@ts-ignore
    inputRef?.current?.click();
  };

  const aoAlterarImagem = () => {
    //@ts-ignore
    if (!inputRef?.current?.files?.length) return;

    //@ts-ignore
    const arquivo = inputRef?.current?.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(arquivo);
    fileReader.onloadend = () => {
      setImage({
        preview: fileReader.result,
        arquivo,
      });
    };
  };
  return (
    <div
      className={`uploadImageContainer ${className}`}
      onClick={abrirSeletorArquivos}
    >
      <button>Abrir seletor de arquivos</button>
      {imagePreview && (
        <div className={`imagePreviewContainer`}>
          <Image
            src={imagePreview}
            alt="imagem preview"
            className={`${imagemPreviewClassName}`}
            width={100}
            height={100}
          />
        </div>
      )}
      <input
        type="file"
        className="hidden"
        accept="image"
        onChange={aoAlterarImagem}
        ref={inputRef}
      />
    </div>
  );
};

export default UploadImage;
