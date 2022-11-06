import {
  homeGray,
  homePurple,
  userGray,
  userBlue,
  plusSquareGray,
  plusSquareFilled,
} from "../../public/image";
import Image from "next/image";

const Navbar = ({className}:any) => {
  return (
    <nav className={`barraNavegacao ${className}`}>
      <ul>
        <li>
          <Image src={homeGray} alt="Home Inativo" width={20} height={20} />
        </li>
        <li>
          <Image src={homePurple} alt="Home Ativo" width={20} height={20} />
        </li>
        <li>
          <Image src={userGray} alt="Usuário Inativo" width={20} height={20} />
        </li>
        <li>
          <Image src={userBlue} alt="Usuário Ativo" width={20} height={20} />
        </li>
        <li>
          <Image src={plusSquareGray} alt="Seguir Inativo" width={20} height={20} />
        </li>
        <li>
          <Image src={plusSquareFilled} alt="Seguir Ativo" width={20} height={20} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
