import InputPublico from "../inputPublico";
import { envelope } from "../../public/image";

const Login = () => {
  return (
    <section className={`paginaLogin paginaPublica`}>
      <div className={`logoContainer`}></div>

      <div className={`conteudoPaginaPublica`}>
        <form>
          <InputPublico image={envelope}
          tipo='email'
          texto='Email'
          aoAlterarValor={()=>console.log('digit email')}
          
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
