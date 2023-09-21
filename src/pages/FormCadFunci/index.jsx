import "../FormCadFunci/assets/css/style.css";
import Timeline from "../../components/TimeLine";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "./services/api";
import Modal from "./components/Modal/Modal";

const FormsCadFunci = () => {
  const [cep, setCep] = useState("");
  const [cepBody, setCepBody] = useState({});
  const [modal, setModal] = useState(false);

  const [form, setForm] = useState({
    first_name: "string",
    surname: "string",
    birthdate: "2023-09-21",
    employee_role: "string",
    email: "user@example.com",
    phone_number: "55943046508",
    cpf: "144.774536-93",
    num: "string",
    complement: "string",
    zipcode: "95790200",
    street: "string",
    city: "string",
    state: "string",
    status: "to_be_send",
    welcome_kit_id: 0
  })

  // const [employee, setEmployee] = useState({
  //   first_name: "string",
  //   surname: "string",
  //   birthdate: "2023-09-21",
  //   employee_role: "string",
  //   email: "user@example.com",
  //   employee_password: "string",
  //   phone_number: "55943046508",
  //   cpf: "144.774536-93",
  //   level_access: "default",
  //   company_id: 1,
  //   address_id: 1
  // })

  // const [address, setAddress] = useState({
  //   num: "string",
  //   complement: "string",
  //   zipcode: "95790200",
  //   street: "string",
  //   district: "string",
  //   city: "string",
  //   state: "string"
  // })

  // const [tracking, setTracking] = useState({
  //   tracking_code: "string",
  //   status: "to_be_send",
  //   employee_id: 0,
  //   welcome_kit_id: 0
  // })

  const changeHandler = e => {
    setForm(form => {
      return { ...form, [e.target.name]: e.target.value }
    })
  }

  const [welcomeKit, setWelcomeKit] = useState()

  useEffect(() => {
    const cepOnlyNumbers = cep.replace(/[^0-9]/g, '');
    if (cepOnlyNumbers.length === 8) {
      axios({
        method: "GET",
        url: `https://viacep.com.br/ws/${cepOnlyNumbers}/json/`,
      })
        .then((response) => {
          if (!response.data.erro) {
            setCepBody(response.data)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cep])

  const createEmployee = async (e) => {
    e.preventDefault()

    await api.post("/employee/create-employee/", {
      first_name: first_name,
      surname: surname,
      birthdate: form.birthdate,
      employee_role: form.employee_role,
      email: form.email,
      phone_number: form.phone_number,
      cpf: form.cpf,
      num: form.num,
      complement: form.complement,
      zipcode: form.zipcode,
      street: form.street,
      city: form.city,
      state: form.state,
      status: form.status,
      welcome_kit_id: form.welcome_kit_id
    }).catch((err) => {
      console.error(err);
    })

    setModal(true)

  }

  const getWelcomeKits = async () => {
    await api.get(`/welcome-kit/getall-welcome-kit/`)
      .then((res) => setWelcomeKit(res.data)
      ).catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    getWelcomeKits();
  }, [])

  // tratando nome completo
  const complete_name = (form.first_name).split(' ')
  const first_name = complete_name[0]
  const surname = (complete_name.toString()).replace(`${first_name},`, "")

  return (

    <>

      <div className="conteudo">
        <Timeline />



        <div className="formcadfuncionario">


          <form className="formcontent">
            <div>
              {modal && <Modal />}
            </div>

            <div className="titleCad">
              <h4>
                Dados Pessoais
              </h4>
            </div>

            <div className="maior">
              <h4>Nome completo</h4>
              <input type="text" placeholder="Digite aqui" name="first_name"
                onChange={changeHandler}
              />
            </div>

            <div className="flexinput">
              <div>
                <h4>CPF</h4>
                <input type="text" placeholder="Digite aqui" name="cpf"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <h4>Data de nascimento</h4>
                <input type="text" placeholder="Digite aqui" name="birthdate"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="maior">
              <h4>Cargo</h4>
              <input type="text" placeholder="Digite aqui" list="55" name="employee_role"
                onChange={changeHandler}
              />
              <datalist id="55">
                <option value="Analista"></option>
                <option value="RH"></option>
                <option value="Auxiliar"></option>
                <option value="Adm"></option>
                <option value="Gestor"></option>
              </datalist>

            </div>

            <div className="flexinput" >
              <div>
                <h4>Email</h4>
                <input type="text" placeholder="Digite aqui" name="email"
                  onChange={changeHandler}
                />
              </div>

              <div>
                <h4>Telefone</h4>
                <input type="text" placeholder="Digite aqui" name="phone_number"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="flexinput">
              <div>
                <h4>CEP</h4>
                <input type="text" placeholder="Digite aqui" name="zipcode"
                  onChange={
                    (event) => setCep(event.target.value)
                  }
                />
              </div>

              <div>
                <h4>Estado</h4>
                <input type="text" placeholder="Digite aqui" name="state"
                  defaultValue={cepBody.uf}
                  onChange={changeHandler} />
              </div>
            </div>

            <div className="flexinput">
              <div>
                <h4>Cidade</h4>
                <input type="text" placeholder="Digite aqui" name="city"
                  defaultValue={cepBody.localidade}
                  onChange={changeHandler} />
              </div>

              <div>
                <h4>Rua</h4>
                <input type="text" placeholder="Digite aqui" name="street"
                  defaultValue={cepBody.logradouro}
                  onChange={changeHandler} />
              </div>
            </div>

            <div className="flexinput">
              <div>
                <h4>Número</h4>
                <input type="text" placeholder="Digite aqui" name="num"
                  onChange={changeHandler}
                />
              </div>

              <div>
                <h4>Complemento</h4>
                <input type="text" placeholder="Digite aqui" name="complement"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="welcometitle">
              <h4>
                Welcome Kits
              </h4>
            </div>

            <div className="flexinput">
              <div>
                <h4>
                  kits
                </h4>
                <input type="text" placeholder="Selecione aqui" list="kit" name="welcome_kit_id"
                  onChange={changeHandler}
                />
                <datalist id="kit">
                  {welcomeKit?.map((option) => (
                    <option key={option.id} value={option.name}>{option.name}</option>
                  ))}
                </datalist>
              </div>

              <div>
                <h4>Status</h4>
                <input type="text" placeholder="Selecione aqui" list="status" name="status"
                  onChange={changeHandler}
                />
                <datalist id="status" >
                  <option value="Entregue"></option>
                  <option value="Transportando"></option>
                  <option value="Não entregue"></option>
                </datalist>
              </div>
            </div>

            <div className="btn">

              <button className="btn-cancelar" onClick={() => window.location.reload(true)}>Cancelar</button>
              <button type="submit" className="btn-salvar" onClick={(e) => createEmployee(e)}>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormsCadFunci;
