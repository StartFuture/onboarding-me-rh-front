import "../../assets/css/style.css"
import DragDrop from "../DragDrop/DragDrop";
import { useState, useEffect } from "react";
import api from "../../services/api";
import TopingMenu from "../../../../components/TopingMenu";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Form = () => {

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [modal, setModal] = useState(false);

  const createItem = async (e) => {
    e.preventDefault()

    await api.post("create-welcome-kit-item/", {
      "name": name,
      "image": image
    }).catch((err) => {
      console.error(err);
    })

    setModal(true)
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

  return (
    <div className="form-container-item">

      <div className="container-topmenu">

        <TopingMenu />
      </div>

      <div className="kit-container-item">
        <div>
          {modal && <Modal />}
        </div>

        <form className="company-form" >

          <div className="drop-image">
            <span>Anexe a imagem do item cadastrado</span>

            <DragDrop />
          </div>
          <div className="items">
            <div className="inputs">
              <h4>Nome do item *</h4>
              <input type="text"
                placeholder="Digite aqui"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="buttons">
            <Link to="/form-welcome-kit">
            <button className="cancel-button">Cancelar</button>
            </Link>
            <button type="submit" className="save-button" onClick={(e) => createItem(e)}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
