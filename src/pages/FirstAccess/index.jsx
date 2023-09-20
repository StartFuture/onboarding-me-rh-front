import "./assets/css/style.css";

const FirstAccess = () => {
    return (
      <>
      <div class="container-form">
      <div class="bar-mobile"></div>
        <div class="content-form">
          <h3>Informe o seu acesso</h3>
          <h5>Campos obrigatórios sinalizados com <strong>*</strong></h5>
          <form>
            <h4>Senha<strong> *</strong></h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Confirmar senha<strong> *</strong></h4>
            <input type="text" placeholder="Digite aqui" />
          </form>
          <button class= "next-button">Prosseguir</button>
        </div>
      </div>
</>
  );
};

export default FirstAccess;