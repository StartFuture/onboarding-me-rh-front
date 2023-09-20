import "../../assets/css/style.css";
import DragDrop from "../DragDrop/DragDrop";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import api from "../../services/api";
import TopingMenu from "../../../../components/TopingMenu/index"
import Modal from "../Modal/Modal";
import RedTrashIcon from '../../../../assets/img/red-trash-icon.svg'

const Form = () => {

  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [kitCompleto, setKitCompleto] = useState({})

  const createKit = async (e) => {
    e.preventDefault()

    if(kitCompleto.id) {
      await api.put(`welcome-kit/update-welcome-kit/${kitCompleto.id}`, {
        name: name,
        image: image,
        wk_items: selectedItems
      }).catch((err) => {
        console.error(err);
      })
      
    } else {
      await api.post("welcome-kit/create-welcome-kit/", {
        name: name,
        image: image,
        wk_items: selectedItems
      }).catch((err) => {
        console.error(err);
      })
    }

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

  const getItems = async () => {
    await api.get(`/welcome-kit-item/getall-welcome-kit-item/`)
      .then((res) => setItems(res.data)
      ).catch((err) => {
        console.log(err)
      });
  }

  const getOneKit = async () => {
    const queryParams = new URLSearchParams(window.location.search)
    const wkId = queryParams.get("wk_id")

    await api.get(`/welcome-kit/getone-welcome-kit/${wkId}`)
      .then((res) => {setKitCompleto(res.data)
        setSelectedItems(res.data.wk_items)
      }
      ).catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    getItems();
    getOneKit();
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };


  useEffect(() => {
    try {
      if (selectedOption) {
        setSelectedItems(current => [...current, selectedOption]);
      }
    } catch (error) {
      console.log(error)
    }

  }, [selectedOption])

  const handleRemoveItem = (e, id) => {
    e.preventDefault()
    setSelectedItems((current) => current.filter((item) => id !== item.id))
  };

  const deleteKit = () => {
    api.delete(`/welcome-kit/delete-welcome-kit/${kitCompleto.id}`)
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="form-container-wk">

      <div className="container-topmenu">

        <TopingMenu />
      </div>

      <div className="kit-container-wk">
        <div className="kit-title">
          <h4>Kit</h4>
          <button onClick={deleteKit()}> delete </button>
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
            defaultValue={kitCompleto.wk_name}
          />

          <div className="send-soon">
            <span>Anexe a imagem completa do kit.</span>

            <DragDrop loadedImage={kitCompleto.wk_image} />
          </div>

          <hr />

          <div className="items">
            <span>Itens</span>
            <div className="dropdown">
              <div className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption && (
                  <img src={selectedOption.image} alt={selectedOption.name} className="dropdown-option-image" />
                )}
                <span className="dropdown-option-label">
                  {selectedOption ? selectedOption.name : 'Selecione um item'}
                </span>
                <span className="dropdown-caret"></span>
              </div>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                {items?.map((option, index) => (
                  <li key={index} onClick={() => selectOption(option)}>
                    <img src={option.image} alt={option.name} className="dropdown-option-image" />
                    <span className="dropdown-option-label">{option.name}</span>
                  </li>
                ))}
              </ul>
              <button onClick={toItemForm}>Criar Item</button>
            </div>
          </div>

          {(selectedOption || selectedItems.length > 0) ?
            selectedItems?.map((item) => (

              <div className="itemContainer">
                <div className="itemWK" key={item?.id}>
                  <div className="itemImage">
                    <img src={item ? item.image : ''} alt="imagem do item" />
                  </div>
                  <p>{item ? item.name : ''}</p>
                </div>
                <div className="removeItem" onClick={(e) => handleRemoveItem(e, item.id)}>
                  <img src={RedTrashIcon} alt="" />
                </div>
              </div>
            ))
            :
            <div className="no-items">
              <span>Você não tem itens cadastrados no seu kit.</span>
            </div>
          }
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
