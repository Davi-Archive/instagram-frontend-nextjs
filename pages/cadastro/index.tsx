import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import InputPublico from "../../components/inputPublico";
import { avatar, envelope, key, logo, userBlue } from "../../public/image";
import Button from "../../components/button";
import UploadImage from "../../components/uploadImage";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirma, setSenhaConfirma] = useState("");
  const [imagem, setImagem] = useState("");
  return (
    <section className={`paginaLogin paginaPublica`}>
      <div className="logoContainer desktop">
        <Image src={logo} alt="Instagram Logo" layout="fill" className="logo" />
      </div>
      
      <div className={`conteudoPaginaPublica`}>
        <form>
          <UploadImage
          imagemPreviewClassName="avatar avatarPreview"
          imagePreview={imagem?.preview || avatar}
          setImage={setImagem}
          />

          <InputPublico
            image={userBlue}
            tipo="text"
            texto="Nome"
            aoAlterarValor={(e: any) => setNome(e.target.value)}
            valor={nome}
          />
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
          <InputPublico
            image={key}
            tipo="password"
            texto="Confirme sua senha"
            aoAlterarValor={(e: any) => setSenhaConfirma(e.target.value)}
            valor={senhaConfirma}
          />

          <Button type="submit" text="Cadastrar" isDisabled={false} />
        </form>
        <div className="rodapePaginaPublica">
          <p>Já possui uma conta?</p>
          <Link href="/">Faça seu login agora</Link>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
