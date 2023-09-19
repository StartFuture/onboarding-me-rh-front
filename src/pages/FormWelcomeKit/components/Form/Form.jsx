import "../../assets/css/style.css";
import DragDrop from "../DragDrop/DragDrop";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import api from "../../services/api";
import TopingMenu from "../../../../components/TopingMenu/index"
import Modal from "../Modal/Modal";
import RedTrashIcon from '../../../../assets/img/red-trash-icon.svg'
import ItemImage from '../../assets/img/image5.png'

const Form = () => {

  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [modal, setModal] = useState(false);

  const createKit = async (e) => {
    e.preventDefault()

    await api.post("create-welcome-kit/", {
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

  
  const toItemForm = () => {
    navigate('/form-item');
  };

  return (
    <div className="form-container-wk">

      <div className="container-topmenu">

        <TopingMenu />
      </div>
      <div className="kit-container-wk">
        <div className="kit-title">
          <h4>Kit</h4>
        </div>
        <div>
          {modal && <Modal />}
        </div>
        <form className="company-form" >
          <h4>Nome do kit *</h4>
          <input type="text"
            placeholder="Digite aqui"
            onChange={(e) => setName(e.target.value)
            }
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
          <div className="itemContainer">
            <div className="itemWK">
              <div className="itemImage">
                <img src={ItemImage} alt="imagem do item" />
              </div>
              <p>Item teste</p>
            </div>
            <div className="removeItem">
              <img src={RedTrashIcon} alt="" />
            </div>

          </div>
          {/* <div className="no-items">
            <span>Você não tem itens cadastrados no seu kit.</span>
          </div> */}
          <div className="buttons">
            <button className="cancel-button" onClick={() => window.location.reload(true)} >Cancelar</button>
            <button type="submit" className="save-button" onClick={(e) => createKit(e)} >Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
