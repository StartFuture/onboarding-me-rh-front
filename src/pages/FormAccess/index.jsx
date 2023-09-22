import "./assets/css/access.css";
import Timeline from "../../components/TimeLine";
import { Link } from "react-router-dom";

const FormAccess = () => {
  return (
    <>
      <Timeline currPage="1" isCompany="true" />
      <div class="formaccess-container-form">
        <div class="bar-mobile"></div>
        <div class="formaccess-content-form">
          <h3>Informe o seu acesso</h3>
          <h5>Campos obrigatórios sinalizados com  <strong>*</strong></h5>
          <form>
            <h4>E-mail <strong>*</strong></h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Senha <strong>*</strong></h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Confirmar senha <strong>*</strong></h4>
            <input type="text" placeholder="Digite aqui" />
          </form>
          <Link to="/welcome?c=true">
            <button class="formaccess-next-button">Prosseguir</button>
          </Link>
          <Link to='/forms-company'>
            <button class="formaccess-back-button">Voltar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormAccess;
