import { Link } from "react-router-dom";
import "./assets/css/style.css";
import Timeline from "../../components/TimeLine";

const FirstAccess = () => {
  return (
    <>
      <Timeline currPage="1" />
      <div class="firstaccess-container-form">
        <div class="bar-mobile"></div>
        <div class="firstaccess-content-form">
          <h3>Informe o seu acesso</h3>
          <h5>Campos obrigatórios sinalizados com <strong>*</strong></h5>
          <form>
            <h4>Senha<strong> *</strong></h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Confirmar senha<strong> *</strong></h4>
            <input type="text" placeholder="Digite aqui" />
          </form>
          <Link to="/welcome">
            <button class="firstaccess-next-button">Prosseguir</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FirstAccess;