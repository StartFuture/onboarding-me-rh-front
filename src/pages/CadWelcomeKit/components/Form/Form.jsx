import "../../assets/css/style.css";
import DragDrop from "../DragDrop/DragDrop";

const Form = () => {
  return (
    <div className="form-container">

      <div className="kit-container">

        <div class="kit-title">
          <h4>Kit</h4>
        </div>

        <form className="company-form">
          <h4>Nome do kit *</h4>
          <input type="text" placeholder="Digite aqui" />

          <div class="send-soon">
            <span>Anexe a imagem completa do kit.</span>

            <DragDrop />
          </div>

          <hr />

          <div className="items">
            <span>Itens</span>
            <button>Adicionar Itens</button>
          </div>
          <div className="no-items">
            <span>Você não tem itens cadastrados no seu kit.</span>
          </div>
          <div className="buttons">
            <button className="cancel-button">Cancelar</button>
            <button className="save-button">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
