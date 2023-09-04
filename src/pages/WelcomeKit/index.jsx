import "./assets/css/style.css";
import SideBar from "../../components/SideBar";
import WkCard from "./components/WkCard/WkCard";
import SearchBar from "./components/SearchBar/SearchBar";
import { useMediaQuery } from 'react-responsive';


const WelcomeKit = () => {

  let hasContent = true;

  const isMobile = useMediaQuery({
    query: '(max-width: 650px)'
  })

  let searchBar;

  if (!hasContent && isMobile) {
    searchBar = null;
  } else {
    searchBar = <SearchBar />;
  }

    return (
      <>
      {/* <SideBar/> */}
      <div class="container-search">
      <div class="bar-mobile"></div>

      {searchBar}

      { hasContent ? 
        <div class="content-cards">

        <WkCard />
        <WkCard />
        <WkCard />

        <WkCard />
        <WkCard />
        <WkCard />
          
        </div>

        :

        <div class="no-content">
          <img src="https://i.ibb.co/93LHXrs/Inventory.png" alt="no content"/>

          <span>Você não tem kits cadastrados. Cadastre clicando no botão abaixo.</span>

          <button class= "add-button-desktop">Adicionar Kit</button>

        </div>
      }
      </div>
      <div class="add-button-container">
        <button class= "add-button-mobile">Adicionar Kit</button>
      </div>
</>
  );
};

export default WelcomeKit;