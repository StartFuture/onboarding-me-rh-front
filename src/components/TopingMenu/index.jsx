import Dashboard from "../../assets/img/Dashboard.svg";
import Funcionarios from "../../assets/img/Funcionários.svg";
import WelcomeKits from "../../assets/img/Welcomekit.svg";
import Feedback from "../../assets/img/Feedback.svg";
import "./style.css";

function TopingMenu() {
  return (
    <>
    <script src="functions.js"></script>
      <div class="header">
        <nav class="nav">
          <button class="btn-mobile">
            <span class="hamburguer"></span>
          </button>
          <a>Funcionários</a>
          <ul class="menu">
            <li>
              <img src={Dashboard} alt="Dashboard Icon" />
              <span>Dashboard</span>
            </li>
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
      <script src="./.js"></script>
    </>
  );
}

export default TopingMenu;
