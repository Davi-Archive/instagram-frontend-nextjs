import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Feed from "../../../components/feed";
import HeaderPerfil from "../../../components/headerPerfil";
import comAutorizacao from "../../../hoc/comAutorizacao";
import ApiUsuarioService from "../../../services/ApiUsuarioService";

const usuarioService = new ApiUsuarioService();

const Perfil = ({ usuarioLogado }: any) => {
  const [usuario, setUsuario] = useState({});
  const router = useRouter();

  const obterPerfil = async (idUsuario: any) => {
    try {
      const { data } = await usuarioService.obterPerfil(idUsuario);
      return data;
    } catch (error) {
      console.log(error);
      toast.error("Error ao obter perfil do usuário.", { autoClose: 2000 });
    }
  };

  useEffect(() => {
    if(!router.query.id) return;
    obterPerfil(router.query.id).then((data:any) => setUsuario(data));
  }, []);

  return (
    <div className="paginaPerfil">
      <HeaderPerfil usuarioLogado={usuarioLogado} usuario={usuario} />
      <Feed usuarioLogado={usuarioLogado}
      idUsuario={router.query.id}
      />
    </div>
  );
};

export default comAutorizacao(Perfil);
