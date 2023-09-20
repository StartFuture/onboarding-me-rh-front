import "../../assets/css/style.css"
import React from "react";
import { Link } from "react-router-dom";

const WkCard = ({ kit }) => {

  return (
    <>
      <div key={kit.id} className="wk-card">
        <img src={kit.image} alt="Imagem do Card" />
        <h4> {kit.name} </h4>
        <span>X itens por kit</span>
        <Link to={{
          pathname: '/form-welcome-kit',
          search: `?wk_id=${kit.id}`,
        }}>Acessar Kit &gt;</Link>
      </div>
    </>
  );
};

export default WkCard;