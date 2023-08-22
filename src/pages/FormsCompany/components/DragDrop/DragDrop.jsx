import { useState, useRef } from "react";
import Upload from "../../assets/img/Upload.svg";
import "../../assets/css/DragDrop.css";

const DragDrop = () => {
  const [image, setImage] = useState(Upload);
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
      const objectUrl = URL.createObjectURL(files[0])
      setImage(objectUrl);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    const { files } = e.target;
    if (files && files.length) {
      const objectUrl = URL.createObjectURL(files[0])
      setImage(objectUrl);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <form className="logoimg" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()} onClick={onButtonClick}>
      <input ref={inputRef} type="file" id="input-file-upload" 
        multiple={true} onChange={handleChange} style={{display: "none"}} />

      <label htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
        <div>
          <img src={image} alt="enviar logo da empresa" />
          <span>Clique ou arraste o logo da sua empresa</span>
        </div>
      </label>
      {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
    </form>
  );
};

export default DragDrop