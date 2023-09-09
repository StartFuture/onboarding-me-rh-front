import LogoMenu from "../../assets/img/LogoUber.png";
import Dashboard from "../../assets/img/Dashboard.svg";
import Funcionarios from "../../assets/img/Funcionários.svg";
import WelcomeKits from "../../assets/img/Welcomekit.svg";
import Feedback from "../../assets/img/Feedback.svg";
import Elipse from "../../assets/img/Ellipse 3.svg";
import "./style.css";

function LateralMenu() {
  return (
    <>
      <div class="container-menu">
        <div class="logo">
          <img src={LogoMenu} alt="Logo" />
        </div>
        <div>
          <div class="navigation-item">
            <img src={Dashboard} alt="Dashboard Icon" />
            <span>Dashboard</span>
          </div>
          <div class="navigation-item">
            <img src={Funcionarios} alt="Employees Icon" />
            <span>Funcionarios</span>
          </div>
          <div class="navigation-item">
            <img src={WelcomeKits} alt="Welcome Kit Icon" />
            <span>Welcome Kit</span>
          </div>
          <div class="navigation-item">
            <img src={Feedback} alt="Feedback Icon" />
            <span>Feedbacks</span>
          </div>
        </div>
        <div class="footer-perfil">
          <img src={Elipse} alt="Perfil Image" />
          <div>
            <span>Marcelo Henrique </span>
            <button>Acessar Perfil</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LateralMenu;
