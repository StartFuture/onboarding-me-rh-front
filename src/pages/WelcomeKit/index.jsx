import "./assets/css/style.css";
import SideBar from "../../components/SideBar";
import WkCard from "./components/WkCard/WkCard";
import SearchBar from "./components/SearchBar/SearchBar";
import React, { useCallback, useEffect, useState } from "react";
import api from "./services/api";
import NoContent from "./assets/images/no-content.png"


const WelcomeKit = () => {

  const [kits, setKits] = useState([]);

  const getKits = async () => {
    await api.get("/getall-wk-paginated/?page=1")
      .then((res) => setKits(res.data)
      );
  }

  useEffect(() => {
    getKits();
  }, [])

  const handleChange = useCallback((searchedKits) => {
    setKits(searchedKits);
  }, []);

  return (
    <>
      <div className="container-search">
        <div className="bar-mobile"></div>
        <div style={{ display: kits.length > 0 ? "block" : "none" }}>
          <SearchBar handleChange={handleChange} />
          <div className="content-cards" >
            {kits.map((kit) => (
              <WkCard kit={kit} />
            ))}
          </div>
        </div>

        <div className="no-content" style={{ display: kits.length > 0 ? "none" : "flex" }}>
          <img src={NoContent} alt="no content" />
          <span>Você não tem kits cadastrados. Cadastre clicando no botão abaixo.</span>
          <button className="add-button-desktop">Adicionar Kit</button>
        </div>
      </div>
      <div className="add-button-container">
        <button className="add-button-mobile">Adicionar Kit</button>
      </div>
    </>
  );
};

export default WelcomeKit;