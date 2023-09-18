import "./assets/css/style.css";
import WelcomeImage from "./assets/img/Celebration-amico (1).svg";
import LogoOnboarding from "./assets/img/ME.svg";

const Welcome = () => {
  return (
    <>
      <div class="container-welcome">
        <div class="bar-mobile"></div>
        <div class="content-welcome">
          <img src={WelcomeImage} alt="" />
          <h1>Bem Vindo a</h1>
          <img class="logo-onboarding" src={LogoOnboarding} alt="Pessoas comemorando" />
          <button>Acessar Portal</button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
