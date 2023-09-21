import "./assets/css/style.css";
import WkCard from "./components/WkCard/WkCard";
import SearchBar from "./components/SearchBar/SearchBar";
import LateralMenu from "../../components/LateralMenu/index"
import TopingMenu from "../../components/TopingMenu";
import React, { useCallback, useEffect, useState } from "react";
import api from "./services/api";
import NoContent from "./assets/images/no-content.png"
import usePagination from "../../hooks/usePagination";

const WelcomeKit = () => {

  const pageSize = 6

  const [kits, setKits] = useState([]);
  const [totalKits, setTotalKits] = useState([]);
  const { actualPage, setActualPage } = usePagination();

  const getPaginatedKits = async (page) => {
    await api.get(`getall-wk-paginated/?page=${page}`)
      .then((res) => setKits(res.data)
      ).catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    getPaginatedKits(actualPage);
  }, [actualPage])

  const handleChange = useCallback((searchedKits) => {
    setKits(searchedKits);

    const searchbar = document.getElementById('search-bar');
    if (searchbar.value.length === 0) {
      getPaginatedKits(actualPage)
    }
  }, [actualPage]);


  const getKits = async () => {
    await api.get(`getall-welcome-kit/`)
      .then((res) => setTotalKits(res.data)
      ).catch ((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    getKits();
  }, [])

  const totalPageCount = Math.ceil(totalKits.length / pageSize);

  return (
    <>
      <div className="container-page">
        <LateralMenu />
        <div className="container-search">
          <TopingMenu />
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
          <div className="pagination">
            <button className="page-button" onClick={() => setActualPage(actualPage - 1)}
              disabled={actualPage <= 1}
            >
              &lt;
            </button>
            <button className="page-button" onClick={() => setActualPage(actualPage + 1)}
              disabled={actualPage >= totalPageCount}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="add-button-container">
          <button className="add-button-mobile">Adicionar Kit</button>
        </div>
      </div>
    </>
  );
};

export default WelcomeKit;