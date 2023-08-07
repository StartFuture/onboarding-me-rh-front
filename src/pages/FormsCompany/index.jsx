import { Title } from "./assets/css/style.ts";
const FormsCompany = () => {
  return (
  <>
    <div className="Title">

      <h1>Cadastre sua empresa :) </h1> 
      <span>Campos Obrigatórios sinalizado com *</span>
    </div>

    <div className="form">

      <form action="">
        <h4>Nome Fantasia</h4>
        <input type="text"placeholder="Digite aqui" />
        <h4>Razão Social</h4>
        <input type="text" placeholder="Digite aqui" />
        <h4>CNPJ</h4>
        <input type="text" placeholder="Digite aqui" />
        <h4>Inscrição Estadual</h4>
        <input type="text" placeholder="Digite aqui" />
      </form>
    </div>

    <div className="send-soon">
      <span>Envie o logo da sua empresa para uma maior identificação</span>
    </div>

    <div className="checkbox">
      <input type="checkbox"/>
      <input type="checkbox"/>
      <input type="checkbox"/>
    </div>

    <div className="button">
      <button>Prosseguir</button>
    </div>

  </>
  );
};

export default FormsCompany;