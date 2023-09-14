import "./assets/css/style.css";
import GradientImg from "./assets/img/gradientimg.png";
import Logo from "./assets/img/Logo (1).svg";

const LoginForm = () => {
  return (
    <>
      <div class="full-container">
        <img class="gradient" src={GradientImg} alt="" />
        <div class="container-form">
          <form>
          <img class="logo" src={Logo} alt="" />
            <h4>E-mail</h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Senha</h4>
            <input type="text" placeholder="Digite aqui" />
            <button class="forget-button">Esqueci minha senha</button>
          <button class="next-button">Prosseguir</button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem
            voluptates fuga odio vero cupiditate voluptas accusantium laudantium
            voluptatum facilis temporibus praesentium neque ducimus libero,
            distinctio totam possimus sit obcaecati.
          </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
