import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Feed from "../../../components/feed";
import HeaderPerfil from "../../../components/headerPerfil";
import comAutorizacao from "../../../hoc/comAutorizacao";
import { leftArrow } from "../../../public/image";

const Perfil = ({ usuarioLogado }: any) => {
  const [usuario, setUsuario] = useState({ nome: "Davi" });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setUsuario({
      nome: "Davi",
    });
  }, []);

  return (
    <div className="paginaPerfil">
      <HeaderPerfil usuarioLogado={usuarioLogado} usuario={usuario} />
      <Feed />
    </div>
  );
};

export default comAutorizacao(Perfil);
