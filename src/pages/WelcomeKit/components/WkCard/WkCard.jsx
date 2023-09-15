import "../../assets/css/style.css"
import React from "react";

const WkCard = ({ kit }) => {

  return (
    <>
      <div key={kit.id} className="wk-card">
        <img src={kit.image} alt="Imagem do Card" />
        <h4> {kit.name} </h4>
        <span>X itens por kit</span>
        <a href="/">Acessar Kit &gt;</a>
      </div>
    </>
  );
};

export default WkCard;