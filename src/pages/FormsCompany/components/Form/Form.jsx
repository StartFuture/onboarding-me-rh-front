import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import DragDrop from "../DragDrop/DragDrop";

const Form = () => {
  return (
    <div className="form-container">
      <div class="bar-mobile"></div>
      <div class="title">
        <h3>Cadastre sua empresa :) </h3>
        <span>Campos Obrigatórios sinalizado com *</span>
      </div>

      <form className="form-company">
        <h4>Nome Fantasia<strong>*</strong></h4>
        <input type="text" placeholder="Digite aqui" />
        <h4>Razão Social<strong>*</strong></h4>
        <input type="text" placeholder="Digite aqui" />
        <div className="cnpj-container">
          <div>
            <h4>CNPJ<strong>*</strong></h4>
            <input type="text" placeholder="Digite aqui" />
          </div>
          <div>
            <h4>Inscrição Estadual</h4>
            <input type="text" placeholder="Digite aqui" />
          </div>
        </div>

        <div class="send-soon">
          <span>Envie o logo da sua empresa para uma maior identificação.</span>
          <DragDrop />
        </div>

        <hr />

        <div class="form-company-checkbox">
          <input type="checkbox" />
          <label>Concordo com todos os termos e condições tratados na reunião com a Onboarding /Me.<strong>*</strong></label>
          <br />
          <input type="checkbox" />
          <label>Concordo que ao seguir com o processo de cadastro, estarei vinculado a Onboarding /Me.<strong>*</strong></label>
          <br />
          <input type="checkbox" />
          <label>Concordo que minhas informações assim como a dos meus funcionários estão seguras com a Onboarding /Me<strong>*</strong></label>
        </div>

        <Link to="/form-access">
          <button className="nextbutton">Prosseguir</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
