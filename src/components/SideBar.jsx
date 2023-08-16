import LogoOme from "../assets/img/Logo.svg"
import "../assets/css/sidebar.css";

const SideBar = () => {
  return (
    <>
      <nav class="sidebar">
        <div class="sidebar">
          <div class="status-itens">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
            >
              <circle cx="18" cy="17.5" r="17" fill="white" stroke="white" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
            >
              <circle cx="18" cy="17.5" r="17" fill="white" stroke="white" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
            >
              <circle cx="18" cy="17.5" r="17" stroke="white" />
              <circle cx="18" cy="17.5" r="9.5" fill="white" />
            </svg>
          </div>
          <ul class="nav-itens">
            <li>
              <a href="">Dados Cadastrais</a>
            </li>
            <li>
              <a href="">Dados De Acesso</a>
            </li>
            <li>
              <a href="">Bem Vindo</a>
            </li>
          </ul>
        </div>
        <div class="logo-ome">
        <img src={LogoOme} alt="Logo"/>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
