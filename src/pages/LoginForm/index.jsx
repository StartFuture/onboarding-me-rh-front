import { Link } from "react-router-dom";
import "./assets/css/style.css";
import GradientImg from "./assets/img/Frame 14.png";
import GradientImgMobile from "./assets/img/Frame 8.png";
import Logo from "./assets/img/Logo (1).svg";


const LoginForm = () => {
  return (
    <>
      <div class="full-login">
        <img
          class="gradient-web"
          src={GradientImg}
          alt="Imagem de uma mulher sorrindo"
        />
        <img
          class="gradient-mobile"
          src={GradientImgMobile}
          alt="Imagem de uma mulher sorrindo"
        />
        <div class="slogan-div"> 
        <h1>
          Crie o <br /> Onboarding <br /> perfeito para <br />
          sua empresa
        </h1>
        </div>
        <div class="login-form">
          <form class="login-logo">
            <img src={Logo} alt="" />
            <h4>E-mail</h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Senha</h4>
            <input type="text" placeholder="Digite aqui" />
            <button class="forget-button">Esqueci minha senha</button>
            <Link to="employee-listing">
              <button class="login-button">Prosseguir</button>
            </Link>
            <p>
              Bem-vindo ao nosso portal de gestão de Recursos Humanos, o seu parceiro confiável para otimizar a força de trabalho e impulsionar o sucesso da sua empresa.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
