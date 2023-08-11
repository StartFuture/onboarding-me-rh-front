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
          <h4>CNPJ</h4>
          <input type="text" placeholder="Digite aqui" />
          <h4>Inscrição Estadual</h4>
          <input type="text" placeholder="Digite aqui" />
        </div>
      </form>

      <div class="send-soon">
        <span>Envie o logo da sua empresa para uma maior identificação</span>
      </div>

      <div class="checkbox">
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </div>

      <div class="button">
        <button>Prosseguir</button>
      </div>
    </div>
  );
};

export default Form;
