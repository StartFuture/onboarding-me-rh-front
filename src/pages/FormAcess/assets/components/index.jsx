import "../css/acess.css";
import SideBar from "../../../../components/SideBar";

const FormAcess = () => {
  return (
    <>
      <SideBar />
      <div class="container-form">
        <div class="content-form">
          <h1>Informe o seu acesso</h1>
          <h4>Campos obrigatórios sinalizados com *</h4>
          <form>
            <h4>E-mail</h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Senha</h4>
            <input type="text" placeholder="Digite aqui" />
            <h4>Confirmar senha</h4>
            <input type="text" placeholder="Digite aqui" />
          </form>
          <button>Prosseguir</button>
          <button>Voltar</button>
        </div>
      </div>
    </>
  );
};

export default FormAcess;
