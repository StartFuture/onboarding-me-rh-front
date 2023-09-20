import "../../assets/css/style.css"
import React from "react";
import { useNavigate } from "react-router-dom";

const WkCard = ({ kit }) => {

  // const navigate = useNavigate()

  return (
    <>
      <div key={kit.id} className="wk-card">
        <img src={kit.image} alt="Imagem do Card" />
        <h4> {kit.name} </h4>
        <span>X itens por kit</span>
        <a href="/" >Acessar Kit &gt;</a>
      </div>
    </>
  );
};

export default WkCard;