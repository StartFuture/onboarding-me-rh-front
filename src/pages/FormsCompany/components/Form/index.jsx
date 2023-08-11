import "../../assets/css/style.css";
const Form = () => {
  return (
    <div className="form-container">
      <div class="title">
        <h3>Cadastre sua empresa :) </h3>
        <span>Campos Obrigatórios sinalizado com *</span>
      </div>

      <form className="company-form">
        <h4>Nome Fantasia</h4>
        <input type="text" placeholder="Digite aqui" />
        <h4>Razão Social</h4>
        <input type="text" placeholder="Digite aqui" />
        <div className="cnpj-container">
          <div>
            <h4>CNPJ</h4>
            <input type="text" placeholder="Digite aqui" />
          </div>
          <div>
            <h4>Inscrição Estadual</h4>
            <input type="text" placeholder="Digite aqui" />
          </div>
        </div>

        <div class="send-soon">
          <span>Envie o logo da sua empresa para uma maior identificação</span>
          <hr />
        </div>

        <div class="checkbox">
          <div>
            <input type="checkbox" />
            <label>Lorem ipsum dolor sit amet consectetur. Vitae elementum eget.</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Lorem ipsum dolor sit amet consectetur. Vitae elementum eget.</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Lorem ipsum dolor sit amet consectetur. Vitae elementum eget.</label>
          </div>
        </div>

        <button className="nextbutton">Prosseguir</button>
      </form>
    </div>
  );
};

export default Form;
