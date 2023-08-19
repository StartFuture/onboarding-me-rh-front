import "./assets/css/access.css";
import SideBar from "../../components/SideBar";

const FormAccess = () => {
  return (
    <>
      <SideBar />
      <div class="container-form">
      <div class="bar-mobile"></div>
        <div class="content-form">
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
          <button class= "next-button">Prosseguir</button>
          <button class= "back-button">Voltar</button>
        </div>
      </div>
    </>
  );
};

export default FormAccess;
