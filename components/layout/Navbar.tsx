import {
  homeGray,
  homePurple,
  userGray,
  userBlue,
  plusSquareGray,
  plusSquareFilled,
} from "../../public/image";
import Image from "next/image";
import { useState } from "react";

const mapaDeRotas = {
  home: {
    imagemAtivo: homePurple,
    rotasAtivacao: ["/"],
    imagemPadrao: homeGray,
  },
  publicacao: {
    imagemAtivo: plusSquareFilled,
    rotasAtivacao: ["/publicacao"],
    imagemPadrao: plusSquareGray,
  },
  perfil: {
    imagemAtivo: userBlue,
    rotasAtivacao: ["/perfil/eu", "/perfil/eu/editar"],
    imagemPadrao: userGray,
  },
};

const Navbar = ({ className }: any) => {
  const [home, setHome] = useState(false);
  const [usuario, setUsuario] = useState(false);
  const [seguir, setSeguir] = useState(false);

  const [rotasAtivacao, setRotaAtiva] = useState('/')

  const buttonActive = () => {
    let active;
    if (active) {
      active = false;
      return true;
    }
    if (!active) {
      active = true;
      return false;
    }
  };

  return (
    <nav className={`barraNavegacao ${className}`}>
      <ul>
        {home ? (
          <li>
            <Image
              src={homePurple}
              alt="home"
              width={20}
              height={20}
              onClick={() => setHome(!home)}
            />
          </li>
        ) : (
          <li>
            <Image
              src={homeGray}
              alt="home"
              width={20}
              height={20}
              onClick={() => setHome(!home)}
            />
          </li>
        )}

        {usuario ? (
          <li>
            <Image
              src={userBlue}
              alt="usuario"
              width={20}
              height={20}
              onClick={() => setUsuario(!usuario)}
            />
          </li>
        ) : (
          <li>
            <Image
              src={userGray}
              alt="usuario"
              data-testid="close-icon"
              width={20}
              height={20}
              onClick={() => setUsuario(!usuario)}
            />
          </li>
        )}

        {seguir ? (
          <li>
            <Image
              src={plusSquareFilled}
              alt="seguir"
              width={20}
              height={20}
              onClick={() => setSeguir(!seguir)}
            />
          </li>
        ) : (
          <li>
            <Image
              src={plusSquareGray}
              alt="seguir"
              width={20}
              height={20}
              onClick={() => setSeguir(!seguir)}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
