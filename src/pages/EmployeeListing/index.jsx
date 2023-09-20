import "./assets/css/style.css";
import Edit from "./assets/img/Edit.svg";
import LateralMenu from "../../components/LateralMenu";
import { useState } from "react";

const EmployeeListing = () => {
  const [listaFuncionarios, setListaFuncionario] = useState([
    {
      first_name: "Marcelo",
      surname: "Henrique",
      employee_role: "Diretor",
      email: "marcelo.henriquee@gmail.com",
      cpf: "555.555.555-55",
      status: "Enviado",
    },
    {
      first_name: "Bruno",
      surname: "Bergamasco",
      employee_role: "Diretor",
      email: "bruno.berga@gmail.com",
      cpf: "111.111.111-11",
      status: "Pendente",
    },
    
  ]);

  return (
    <>
      <div class="full-div">
        <LateralMenu />
        <div class="container-table">
          <div class="search-div">
            <input type="text" />
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
                <th></th>
              </thead>
              <hr />
              {listaFuncionarios.map((funcionario) => (
                <tbody>
                  <td data-title="Nome">{funcionario.first_name + " " + funcionario.surname}</td>
                  <td data-title="CPF">{funcionario.cpf}</td>
                  <td data-title="E-mail">{funcionario.email}</td>
                  <td data-title="Cargo">{funcionario.employee_role}</td>
                  <td data-title="Welcomekit">{funcionario.status}</td>
                  <td data-title="">
                    <img src={Edit} />
                  </td>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeListing;
