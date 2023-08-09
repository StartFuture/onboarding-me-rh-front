import "./assets/css/style.css"
import SideBar from "../../components/SideBar";
const Welcome = () => {
    return (
    <>
<div class="sidebar">
    <SideBar/>
  </div>

<div class="frame-celebration">
   <img src="src\pages\Welcome\assets\img\Celebration-amico.png" alt="imagem de 3 pessoas comemorando" />
  </div>

<div class="container-welcome">
    <h1>Bem Vindo a</h1>
    <h2>ONBOARDING/ME</h2>
  </div>

<div class="button-container">
    <button class="access-button">Acessar Portal</button>
  </div>

<div class="logo-ome">
  <h2>O/ME</h2>
  </div>

</>
  );
};

export default Welcome;