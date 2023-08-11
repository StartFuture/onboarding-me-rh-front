import "./assets/css/style.css";
import SideBar from "../../components/SideBar";
import WelcomeImage from "./assets/img/Celebration-amico (1).svg"
import LogoOnboarding from "./assets/img/ME.svg"

const Welcome = () => {
  return (
    <>
      <div class="sidebar">
        <SideBar />
      </div>

      <div class="content-welcome">
        <img class="welcome-image" src={WelcomeImage} alt="" />
        <h2>Bem Vindo a</h2>
      <img src={LogoOnboarding} alt="Pessoas comemorando" />  
        <div class="button-container">
        <button class="access-button">Acessar Portal</button>
      </div>
      </div>

      <div class="container-welcome">
      </div>

  
    </>
  );
};

export default Welcome;
