import Dashboard from "../../assets/img/Dashboard.svg";
import Funcionarios from "../../assets/img/Funcionários.svg";
import WelcomeKits from "../../assets/img/Welcomekit.svg";
import Feedback from "../../assets/img/Feedback.svg";
import Elipse from "../../assets/img/Ellipse 3.svg";
import "./style.css";
import { Link } from "react-router-dom";

function LateralMenu() {
  return (
    <>
      <div class="container-menu">
        <div class="logo"></div>
        <div class="navigation-div">
          <Link
            to="/on-build"
            style={{ padding: "0px", margin: "0px", textDecoration: "none", color: "#000" }}
          >
            <div class="navigation-item">
              <img src={Dashboard} alt="Dashboard Icon" />
              <span>Dashboard</span>
            </div>
          </Link>
          <Link
            to="/employee-listing"
            style={{ padding: "0px", margin: "0px", textDecoration: "none", color: "#000"  }}
          >
            <div class="navigation-item">
              <img src={Funcionarios} alt="Employees Icon" />
              <span>Funcionarios</span>
            </div>
          </Link>
          <Link
            to="/welcome-kit"
            style={{ padding: "0px", margin: "0px", textDecoration: "none", color: "#000"  }}
          >
            <div class="navigation-item">
              <img src={WelcomeKits} alt="Welcome Kit Icon" />
              <span>Welcome Kit</span>
            </div>
          </Link>
          <Link
            to="/on-build"
            style={{ padding: "0px", margin: "0px", textDecoration: "none", color: "#000"  }}
          >
            <div class="navigation-item">
              <img src={Feedback} alt="Feedback Icon" />
              <span>Feedbacks</span>
            </div>
          </Link>
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
