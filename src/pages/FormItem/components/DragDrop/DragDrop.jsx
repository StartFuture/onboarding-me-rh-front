import { useState, useRef } from "react";
import Upload from "../../assets/img/Upload.svg";
import RedTrashIcon from "../../../../assets/img/red-trash-icon.svg"
import "../../assets/css/DragDrop.css";

const DragDrop = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(Upload);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const { files } = e.dataTransfer;
    if (files && files.length) {
      setImage(files[0]);
      const objectUrl = URL.createObjectURL(files[0])
      setPreview(objectUrl)
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    const { files } = e.target;
    if (files && files.length) {
      setImage(files[0]);
      const objectUrl = URL.createObjectURL(files[0])
      setPreview(objectUrl)
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleRemoveImage = (e) => {
    setImage(null);
    setPreview(Upload);
  };

  const convertByteToMB = (bytes) => {
    if (bytes) {
      const fileSizeBytes = 9000000;
      let fileSizeMB = fileSizeBytes / (1024 ** 2);
      return fileSizeMB.toString().split(".")[0];
    }

    return 0;
  }

  return (
    <>
      <form style={{ display: image ? "none" : "block" }}
        className="logoimg" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()} onClick={onButtonClick}>
        <input ref={inputRef} type="file" id="input-file-upload"
          multiple={true} onChange={handleChange} style={{ display: "none" }} />

        <label htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
          <div>
            <img src={preview} alt="enviar logo da empresa" />
            <span>Clique ou arraste a imagem do item</span>
          </div>
        </label>
        {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
      </form>

      <div style={{ display: !image ? "none" : "flex" }} className="logo-inserted">
        <img className="logo-inserted-preview" src={preview} alt="logo da sua empresa" />
        <div>
          <h4>{image?.name}</h4>
          <span>{convertByteToMB(image?.size)}MB</span>
        </div>

        <div className="remove-button" onClick={handleRemoveImage}>
          <img src={RedTrashIcon} alt="botão de excluir" />
        </div>
      </div>
    </>
  );
};

export default DragDrop