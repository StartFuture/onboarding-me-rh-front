import DashboardWhite from "../../assets/img/Dashboardwhite.svg";
import FuncionariosWhite from "../../assets/img/Funcionárioswhite.svg";
import WelcomeKitsWhite from "../../assets/img/Welcomekitwhite.svg";
import FeedbackWhite from "../../assets/img/Feedbackwhite.svg";
// import Elipse from "../../assets/img/Ellipse 3.svg";
import "./style.css";
import { Link } from "react-router-dom";

function TopingMenu() {
  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementsByClassName("nav")[0];
    nav.classList.toggle("active");
  }

  return (
    <>
      <div class="header">
        <nav class="nav">
          <button class="btn-mobile" onClick={(event) => toggleMenu(event)}>
            <span class="hamburguer"></span>
          </button>
          <a>Funcionários</a>
          <ul class="menu">
            <Link to="/welcome" style={{ padding: "0px", margin: "0px" }}>
              <li>
                <img
                  class="img-dashboard"
                  src={DashboardWhite}
                  alt="Dashboard Icon"
                />
                <span>Dashboard</span>
              </li>
            </Link>
            <li>
              <img src={FuncionariosWhite} alt="Employees Icon" />
              <span>Funcionarios</span>
            </li>
            <li>
              <img src={WelcomeKitsWhite} alt="Welcome Kit Icon" />
              <span>Welcome Kit</span>
            </li>
            <li>
              <img src={FeedbackWhite} alt="Feedback Icon" />
              <span>Feedbacks</span>
            </li>
            {/* <div class="footer-perfil">
          <img src={Elipse} alt="Perfil Image" />
          <div>
            <span>Marcelo Henrique </span>
            <button>Acessar Perfil</button>
          </div>
        </div> */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default TopingMenu;
