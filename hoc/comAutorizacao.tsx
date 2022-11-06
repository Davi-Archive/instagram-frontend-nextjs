import { useRouter } from "next/router";
import Header from "../components/layout/Header";
import ApiUsuarioService from "../services/ApiUsuarioService";
import { search } from "../public/image";
import Footer from "../components/layout/Footer";

const usuarioService = new ApiUsuarioService();

export default function comAutorizacao(Componente:any) {
  return function Amigo (props:any){
    const router = useRouter();

    if (typeof window !== "undefined") {
      if (!usuarioService.estaAuthenticado()) {
        router.replace("/");
        return null;
      }

      const usuarioLogado = usuarioService.obterInformacoesDoUsuarioLogado();

      return (
        <>
          <Header usuarioLogado={usuarioLogado} />
          <Componente usuarioLogado={usuarioLogado} {...props} />
          <Footer usuarioLogado={usuarioLogado} />
        </>
      );
    }

    return null;
  };
}