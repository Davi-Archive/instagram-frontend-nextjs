import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import InputPublico from "../../components/inputPublico";
import { avatar, envelope, key, logo, userBlue } from "../../public/image";
import Button from "../../components/button";
import UploadImage from "../../components/uploadImage";
import {
  validarConfirmacaoSenha,
  validarEmail,
  validarNome,
  validarSenha,
} from "../../utils/validadores";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirma, setSenhaConfirma] = useState("");
  const [imagem, setImagem] = useState(null);

  const validarFormulario = () => {
    return (
      validarNome(nome) &&
      validarEmail(email) &&
      validarSenha(senha) &&
      validarConfirmacaoSenha(senha, senhaConfirma)
    );
  };

  return (
    <section className={`paginaCadastro paginaPublica`}>
      <div className="logoContainer desktop">
        <Image src={logo} alt="Instagram Logo" layout="fill" className="logo" />
      </div>

      <div className={`conteudoPaginaPublica`}>
        <form>
          <UploadImage
            imagemPreviewClassName="avatar avatarPreview"
            //@ts-ignore
            imagemPreview={imagem?.preview || avatar.src}
            setImagem={setImagem}
          />

          <InputPublico
            image={userBlue}
            tipo="text"
            texto="Nome"
            aoAlterarValor={(e: any) => setNome(e.target.value)}
            valor={nome}
            mensagemValidacao="O nome digitado não é válido."
            exibirMensagemValidacao={nome && !validarNome(nome)}
          />
          <InputPublico
            image={envelope}
            tipo="email"
            texto="Email"
            aoAlterarValor={(e: any) => setEmail(e.target.value)}
            valor={email}
            mensagemValidacao="O email digitado não é válido."
            exibirMensagemValidacao={email && !validarEmail(email)}
          />

          <InputPublico
            image={key}
            tipo="password"
            texto="Senha"
            aoAlterarValor={(e: any) => setSenha(e.target.value)}
            valor={senha}
            mensagemValidacao="A senha digitada não é válida."
            exibirMensagemValidacao={senha && !validarSenha(senha)}
          />
          <InputPublico
            image={key}
            tipo="password"
            texto="Confirme sua senha"
            aoAlterarValor={(e: any) => setSenhaConfirma(e.target.value)}
            valor={senhaConfirma}
            mensagemValidacao="A confirmação não é igual a senha digitada não é válida."
            exibirMensagemValidacao={
              senhaConfirma && !validarConfirmacaoSenha(senha, senhaConfirma)
            }
          />

          <Button
            type="submit"
            text="Cadastrar"
            isDisabled={!validarFormulario()}
          />
        </form>
        <div className="rodapePaginaPublica">
          <p>Já possui uma conta?</p>
          <Link href="/"> Faça seu login agora!</Link>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;
