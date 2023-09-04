import "../../assets/css/style.css";

const SearchBar = () => {
  return (
    <>
      <div class="content-search">
          <input type="text" placeholder="Pesquise aqui" />
          <button class= "add-button-desktop">Adicionar Kit</button>
        </div>
    </>
  );
};

export default SearchBar;