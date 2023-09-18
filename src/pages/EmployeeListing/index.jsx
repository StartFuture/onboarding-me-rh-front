import "./assets/css/style.css";
import LateralMenu from "../../components/LateralMenu";

const EmployeeListing = () => {
  
  return (
    <>
      <div class="full-div">
        <LateralMenu/>
        <div class="container-table">
          <div class="search-div">
            <input type="text"/>
            <button>Adicionar Funcionário</button>
          </div>
          <div class="table-div">
            <table>
              <thead>
                <th>Nome</th>
                <th>CPF</th>
                <th>E-mail</th>
                <th>Cargo</th>
                <th>Welcomekit</th>
              </thead>
              <tbody>
                <td data-title="Nome">Marcelo Henrique Santos</td>
                <td data-title="CPF">555.555.555-55</td>
                <td data-title="E-mail">marcelo.henriquee@gmail.com</td>
                <td data-title="Cargo">Diretor</td>
                <td data-title="Welcomekit">Enviado</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeListing;
