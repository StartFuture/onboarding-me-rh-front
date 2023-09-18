import "../../assets/css/style.css";
import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const SearchBar = (props) => {
  
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const getKits = async () => {
    await api.get(`filter-wk-byname?name=${input}`)
      .then((res) => props.handleChange(res.data)
      ).catch ((err) => {
        console.log(err)
        if (err.response.statusText === "Not Found") {
          alert("Nenhum kit encontrado")
        }
      });
  }

  useEffect(() => {
    getKits();
  }, [input])

  const handleChange = (value) => {
    setInput(value)
  }

  const toWKForm = () => {
    navigate('/form-welcome-kit');
  };
  
  return (
    <>
      <div className="content-search">
          <input id="search-bar" type="text" placeholder="Pesquise aqui" value={input} onChange={(e) => handleChange(e.target.value)}/>
          <button className= "add-button-desktop" onClick={toWKForm}>Adicionar Kit</button>
        </div>
    </>
  );
};

export default SearchBar;