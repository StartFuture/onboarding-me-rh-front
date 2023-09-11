import "../../assets/css/style.css";
import React, {useEffect, useState } from "react";
import api from "../../services/api";

const SearchBar = (props) => {

  const [input, setInput] = useState("");

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

  return (
    <>
      <div className="content-search">
          <input id="search-bar" type="text" placeholder="Pesquise aqui" value={input} onChange={(e) => handleChange(e.target.value)}/>
          <button className= "add-button-desktop">Adicionar Kit</button>
        </div>
    </>
  );
};

export default SearchBar;