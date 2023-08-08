import "./assets/css/style.css"
import SideBar from "../../components/SideBar";
const Welcome = () => {
    return (
    <>
<div class="sidebar">
    <SideBar/>
  </div>

<div class="content">
    <img src="src\pages\Welcome\assets\img\Celebration-amico.png" alt="imagem de 3 pessoas comemorando" />
    <h1>Bem Vindo a</h1>
    <h2>ONBOARDING/ME</h2>
  </div>

<div>
  <button class="access-button">Entrar</button>
  </div>
</>
  );
};

export default Welcome;