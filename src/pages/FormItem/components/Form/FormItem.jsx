import "../../assets/css/style.css"
import DragDrop from "../DragDrop/DragDrop";
import { useState, useEffect } from "react";
import api from "../../services/api";
import TopingMenu from "../../../../components/TopingMenu";

const Form = () => {

  const [image, setImage] = useState();
  const [name, setName] = useState();

  const createItem = async (e) => {
    e.preventDefault()

    await api.post("create-welcome-kit-item/", {
      "name": name,
      "image": image
    }).catch((err) => {
      console.error(err);
    })

    alert("Item Cadastrado com Sucesso");
    window.location.reload()
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
            <div className="inputs">

              <h4>Quantidade no kit *</h4>
              <input type="text"
                placeholder="Digite aqui" />
            </div>
          </div>

          <div className="buttons">
          <button type="submit" className="cancel-button" onclick="this.form.reset();">Cancelar</button>
          <button type="submit" className="save-button" onClick={(e) => createItem(e)}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
