import "./assets/css/style.css";
import Edit from "./assets/img/Edit.svg";
import LateralMenu from "../../components/LateralMenu";
import TopingMenu from "../../components/TopingMenu";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    {
      first_name: "Beatriz",
      surname: "Andrade",
      employee_role: "CEO",
      email: "beatriz.andraddee@gmail.com",
      cpf: "999.999.999-99",
      status: "A enviar",
    },
    {
      first_name: "Larissa",
      surname: "Fazani",
      employee_role: "Scrum Master",
      email: "lalarifazani@gmail.com",
      cpf: "111.111.111-11",
      status: "Pendente",
    },
    {
      first_name: "Gabriel",
      surname: "Vinicius",
      employee_role: "Desenvolvedor",
      email: "gabrielll.88@gmail.com",
      cpf: "333.333.333-33",
      status: "A enviar",
    },
    {
      first_name: "Marco",
      surname: "Antonio",
      employee_role: "Desenvolvedor",
      email: "maarrcoanto@gmail.com",
      cpf: "777.777.777-77",
      status: "A enviar",
    },
    {
      first_name: "Levi",
      surname: "Gabriel",
      employee_role: "CEO",
      email: "gablevi.453@gmail.com",
      cpf: "000.000.000-00",
      status: "Enviado",
    },
  ]);

  const MobileCard = ({ nome, cpf, cargo }) => {
    return (
      <div class="mobile-card">
        <p class="nome-card">{nome}</p>
        <p class="cpf-card">{cpf}</p>
        <p class="cargo-card">{cargo}</p>
      </div>
    );
  };

  return (
    <>
      <div class="full-div">
        <LateralMenu />
        <TopingMenu />

        <div class="container-table">
          <div class="search-div">
            <input type="text" />
            <Link to="../forms-cadfuncionario">
              <button style={{ cursor: "pointer" }}>
                Adicionar Funcionário
              </button>
            </Link>
          </div>
          <div className="div-mobile">
            <MobileCard
              nome="Marcelo Henrique Santos"
              cpf="444.212.422-12"
              cargo="Diretor"
            />
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
                  <td data-title="Nome">
                    {funcionario.first_name + " " + funcionario.surname}
                  </td>
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
