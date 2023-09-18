import "../../assets/css/style.css"
import CardImage from "../../assets/images/imagem-card.jpg"
import React from "react";

const WkCard = ({ kit }) => {

  return (
    <>
      <div key={kit.id} className="wk-card">
        <img src={CardImage} alt="Imagem do Card" />
        <h4> {kit.name} </h4>
        <span>{kit.id}</span>
        <a href="/">Acessar Kit &gt;</a>
      </div>
    </>
  );
};

export default WkCard;