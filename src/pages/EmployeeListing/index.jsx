import LateralMenu from "../../components/LateralMenu";
import TopingMenu from "../../components/TopingMenu";

const EmployeeListing = () => {
    return (
      <>
        <LateralMenu/>
        {/* <TopingMenu/> */}
                <table>
                  <thead>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>Cargo</th>
                    <th>Welcomekit</th>
                  </thead>
                  <tbody>
                    <td data-title="Nome"></td>
                    <td data-title="CPF"></td>
                    <td data-title="E-mail"></td>
                    <td data-title="Cargo"></td>
                    <td data-title="Welcomekit"></td>
                  </tbody>
                </table>
</>
  );
};

export default EmployeeListing;