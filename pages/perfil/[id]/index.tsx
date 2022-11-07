import { useRouter } from "next/router";
import { useState } from "react";
import Feed from "../../../components/feed";
import HeaderComAcoes from "../../../components/headerComAcoes";
import comAutorizacao from "../../../hoc/comAutorizacao";
import { leftArrow } from "../../../public/image";

const Perfil = ({usuarioLogado}:any) => {
  const [usuario, setUsuario] = useState({});
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="paginaPerfil">
      <HeaderComAcoes iconeEsquerda={leftArrow} titulo={usuarioLogado.nome} />
      <Feed />
    </div>
  );
};

export default comAutorizacao(Perfil);
