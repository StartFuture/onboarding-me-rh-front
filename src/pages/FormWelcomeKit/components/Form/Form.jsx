import "../../assets/css/style.css";
import DragDrop from "../DragDrop/DragDrop";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import api from "../../services/api";

const Form = () => {

  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [name, setName] = useState();

  const createKit = async (e) => {
    e.preventDefault()

    await api.post("create-welcome-kit/", {
      "name": name,
      "image": image
    }).catch((err) => {
      console.error(err);
    })

    navigate("/welcome-kit");
  }

  useEffect(() => {
    document.getElementById("input-file-upload").addEventListener('change', getFile)
    function getFile() {
      const kitImage = document.getElementById("input-file-upload").attributes[0].ownerElement.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(kitImage);

      reader.onload = () => {
        setImage(reader.result);
      };

    }
  }, [image])

  const toItemForm = () => {
    navigate('/form-item');
  };

  return (
    <div className="form-container-wk">

      <div className="kit-container-wk">

        <div className="kit-title">
          <h4>Kit</h4>
        </div>

        <form className="company-form" >
          <h4>Nome do kit *</h4>
          <input type="text"
            placeholder="Digite aqui"
            onChange={(e) => setName(e.target.value)}
          />

          <div className="send-soon">
            <span>Anexe a imagem completa do kit.</span>

            <DragDrop />
          </div>

          <hr />

          <div className="items">
            <span>Itens</span>
            <button onClick={toItemForm}>Adicionar Itens</button>
          </div>
          <div className="no-items">
            <span>Você não tem itens cadastrados no seu kit.</span>
          </div>
          <div className="buttons">
            <button type="submit" className="cancel-button" onclick="this.form.reset();">Cancelar</button>
            <button type="submit" className="save-button" onClick={(e) => createKit(e)} >Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
