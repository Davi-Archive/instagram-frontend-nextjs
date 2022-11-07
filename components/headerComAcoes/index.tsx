import Image from "next/image";

const HeaderComAcoes = ({
  className,
  iconeEsquerda,
  textoEsquerda,
  aoClicarAcaoEsquerda,
  titulo,
  elementoDireita,
}: any) => {
  return (
    <div className={`cabecalhoComAcoes ${className}`}>
      {iconeEsquerda ? (
        <Image
          src={iconeEsquerda}
          onClick={aoClicarAcaoEsquerda}
          alt="icone esquerda cabecalho ações"
          width={20}
          height={20}
        />
      ) : (
        textoEsquerda !== null && (
          <div className="cabecalhoComAcoesTextoEsquerda">{textoEsquerda}</div>
        )
      )}
      <h3>{titulo}</h3>
      {elementoDireita && <button type="button">{elementoDireita}</button>}
    </div>
  );
};

export default HeaderComAcoes;
