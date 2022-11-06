import { useRouter } from "next/router";
import comAutorizacao from "../../hoc/comAutorizacao"

const Perfil = () => {
    const router = useRouter();
    const {id} = router.query;
  return (
    <div>perfil</div>
  )
}

export default comAutorizacao(Perfil);