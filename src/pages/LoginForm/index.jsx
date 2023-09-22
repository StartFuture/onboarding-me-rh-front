import "./assets/css/style.css";
import GradientImg from "./assets/img/Frame 14.png";
import GradientImgMobile from "./assets/img/Frame 8.png";
import Logo from "./assets/img/Logo (1).svg";


const LoginForm = () => {
  return (
    <>
      <div class="full-container">
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
        <div class="container-form">
          <form class="login-logo">
            <img src={Logo} alt="" />
            <h4>E-mail</h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Senha</h4>
            <input type="text" placeholder="Digite aqui" />
            <button class="forget-button">Esqueci minha senha</button>
            <button class="next-button">Prosseguir</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
              voluptates fuga odio vero cupiditate voluptas accusantium
              laudantium voluptatum facilis temporibus praesentium neque ducimus
              libero, distinctio totam possimus sit obcaecati.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
