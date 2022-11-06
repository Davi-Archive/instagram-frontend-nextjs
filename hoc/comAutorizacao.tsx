import { useRouter } from "next/router";
import ApiUsuarioService from "../services/ApiUsuarioService";

const usuarioService = new ApiUsuarioService();

export default function comAutorizacao(Componente: any) {
  return function NewComp(props: any) {
    const router = useRouter();

    if (typeof window !== "undefined") {
      if (usuarioService.estaAuthenticado()) {
        router.replace("/");
        return null;
      }
      return <Componente {...props} />;
    }
  };
}
