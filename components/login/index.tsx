import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import InputPublico from "../inputPublico";
import { envelope, key, logo } from "../../public/image";
import Button from "../button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <section className={`paginaLogin paginaPublica`}>
      <div className={`logoContainer`}>
        <Image src={logo} alt="Instagram Logo" fill />
      </div>

      <div className={`conteudoPaginaPublica`}>
        <form>
          <InputPublico
            image={envelope}
            tipo="email"
            texto="Email"
            aoAlterarValor={(e: any) => setEmail(e.target.value)}
            valor={email}
          />

          <InputPublico
            image={key}
            tipo="password"
            texto="Senha"
            aoAlterarValor={(e: any) => setSenha(e.target.value)}
            valor={senha}
          />

          <Button type="submit" text="Login" isDisabled={false} />
        </form>
        <div className="rodapePaginaPublica">
          <p>Não possui cadastro?</p>
          <Link href="/cadastro">Faça seu cadastro agora</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
