import { Link } from "react-router-dom";
import Timeline from "../../components/TimeLine";
import "./assets/css/style.css";
import WelcomeImage from "./assets/img/Celebration-amico (1).svg";
import LogoOnboarding from "./assets/img/ME.svg";

const Welcome = () => {
  return (
    <>
      <Timeline />
      <div class="container-welcome">
        <div class="bar-mobile"></div>
        <div class="content-welcome">
          <img src={WelcomeImage} alt="" />
          <h1>Bem Vindo a</h1>
          <img class="logo-onboarding" src={LogoOnboarding} alt="Pessoas comemorando" />
          <Link to="/">
            <button style={{cursor: "pointer"}}>Acessar Portal</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
