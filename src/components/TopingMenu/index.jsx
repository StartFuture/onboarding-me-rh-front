import Dashboard from "../../assets/img/Dashboard.svg";
import Funcionarios from "../../assets/img/Funcionários.svg";
import WelcomeKits from "../../assets/img/Welcomekit.svg";
import Feedback from "../../assets/img/Feedback.svg";
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
            <Link to="/form-access" style={{padding:"0px", margin:"0px"}}>
              <li>
                <img
                  class="img-dashboard"
                  src={Dashboard}
                  alt="Dashboard Icon"
                />
                <span>Dashboard</span>
              </li>
            </Link>
            <li>
              <img src={Funcionarios} alt="Employees Icon" />
              <span>Funcionarios</span>
            </li>
            <li>
              <img src={WelcomeKits} alt="Welcome Kit Icon" />
              <span>Welcome Kit</span>
            </li>
            <li>
              <img src={Feedback} alt="Feedback Icon" />
              <span>Feedbacks</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default TopingMenu;
