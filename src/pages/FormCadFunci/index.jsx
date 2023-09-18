import "../FormCadFunci/assets/css/style.css";
import Timeline from "../../components/TimeLine";


const FormsCadFunci = () => {
  return (

    <>

      <div className="conteudo">
        <Timeline />



        <div className="formcadfuncionario">

          <form className="formcontent">

            <div className="titleCad">
              <h4>
                Dados Pessoais
              </h4>
            </div>

            <div className="maior">
              <h4>Nome completo</h4>
              <input type="text" placeholder="Digite aqui" />
            </div>

            <div className="flexinput">
              <div>
                <h4>CPF</h4>
                <input type="text" placeholder="Digite aqui" />
              </div>
              <div>
                <h4>Data de nascimento</h4>
                <input type="text" placeholder="Digite aqui" />
              </div>
            </div>

            <div className="maior">
              <h4>Cargo</h4>
              <input type="text" placeholder="Digite aqui" list="55"/>
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
                <input type="text" placeholder="Digite aqui" />
              </div>

              <div>
                <h4>Telefone</h4>
                <input type="text" placeholder="Digite aqui" />
              </div>
            </div>

            <div className="flexinput">
              <div>
                <h4>CEP</h4>
                <input type="text" placeholder="Digite aqui" />
              </div>

              <div>
                <h4>Estado</h4>
                <input type="text" placeholder="Digite aqui" list="UF" />
                <datalist id="UF">
                <option value="São Paulo"></option>
                <option value="Minas Gerais"></option>
                <option value="Brasilia"></option>
                <option value="Bahia"></option>
                <option value="Rio Grande do Sul"></option>
              </datalist>

              </div>
            </div>

            <div className="flexinput">
              <div>
                <h4>Cidade</h4>
                <input type="text" placeholder="Digite aqui" list="city" />
                <datalist id="city">
                <option value="Osasco"></option>
                <option value="Barueri"></option>
                <option value="São Paulo"></option>
                <option value="Carapicuiba"></option>
                <option value="Fransisco Morato"></option>
              </datalist>
              </div>

              <div>
                <h4>Rua</h4>
                <input type="text" placeholder="Digite aqui" />
              </div>
            </div>

            <div className="flexinput">
              <div>
                <h4>Número</h4>
                <input type="text" placeholder="Digite aqui" />
              </div>

              <div>
                <h4>Complemento</h4>
                <input type="text" placeholder="Digite aqui" />
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
                <input type="text" placeholder="Selecione aqui" list="kit" />
                <datalist id="kit">
                <option value="Kit-1"></option>
                <option value="Kit-2"></option>
                <option value="Kit-3"></option>
                <option value="Kit-4"></option>
                <option value="Kit-5"></option>
              </datalist>
              </div>

              <div>
                <h4>Status</h4>
                <input type="text" placeholder="Selecione aqui" list="status" />
                <datalist id="status">
                <option value="Entregue"></option>
                <option value="Transportando"></option>
                <option value="Não entregue"></option>
                
              </datalist>
              </div>
            </div>

            <div className="btn">

              <button className="btn-cancelar">Cancelar</button>
              <button className="btn-salvar">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormsCadFunci;
