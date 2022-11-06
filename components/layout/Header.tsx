import Image from "next/image";
import { useState } from "react";
import { logoHorizontal, search } from "../../public/image";
import Navbar from "./Navbar";
import ResultadoPesquisa from "./ResultadoPesquisa";

const Header = () => {
  const [resultadoPesquisa, setResultadoPesquisa] = useState<any>(['']);
  const [termoPesquisado, setTermoPesquisado] = useState<any>("");

  const aoPesquisar = async (e: any) => {
     setTermoPesquisado(e.target.value);
     setResultadoPesquisa([]);

     if (e.target.value.length < 3) {
       return;
     }

     try {

       setResultadoPesquisa([
         {
           avatar: "",
           nome: "Douglas",
           email: "douglas@devagram.com",
           _id: "1232121456",
         },
         {
           avatar: "",
           nome: "Davi",
           email: "davi@daci.com",
           _id: "12234553456",
         },
         {
           avatar: "",
           nome: "mikey",
           email: "douglas@dougles.com",
           _id: "1236786456",
         },
         {
           avatar: "",
           nome: "greusame",
           email: "greusame@greusame.com",
           _id: "123486756",
         },
       ]);
     } catch (e) {
       alert("Erro ao pesquisar usuario.");
     }

  };

  const aoClicarResultadoPesquisa = (id: string) => {
    console.log(id);
    if (termoPesquisado < 3) return;

    setResultadoPesquisa([
      {
        avatar: "",
        nome: "Douglas",
        email: "douglas@devagram.com",
        _id: "124336464456",
      },
      {
        avatar: "",
        nome: "Davi",
        email: "davi@daci.com",
        _id: "1223456",
      },
      {
        avatar: "",
        nome: "mikey",
        email: "douglas@dougles.com",
        _id: "123412141456",
      },
      {
        avatar: "",
        nome: "greusame",
        email: "greusame@greusame.com",
        _id: "1232446456",
      },
    ]);
  };

  return (
    <header className="homeHeader">
      <div className="conteudoCabecalhoPrincipal">
        <div className="logoHeaderPrincipal">
          <Image src={logoHorizontal} alt="Logo Principal" fill />
        </div>

        <div className="barraPesquisa">
          <div className="containerImagemLupa">
            <Image src={search} alt="Icone Lupa" fill />
          </div>
          <input
            type="text"
            value={termoPesquisado}
            placeholder="Pesquisar"
            onChange={aoPesquisar}
          />
        </div>
        <Navbar className="desktop" />
      </div>
      {resultadoPesquisa.length > 0 && (
        <div className="resultadoPesquisaContainer">
          {resultadoPesquisa.map((r: any) => (
            <ResultadoPesquisa
              avatar={r.avatar}
              nome={r.nome}
              email={r.email}
              key={r._id}
              onClick={aoClicarResultadoPesquisa}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
