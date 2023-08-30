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

            <div className="namecomplete">
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

            <div className="cargo">
              <h4>Cargo</h4>
              <input type="text" placeholder="Digite aqui" />
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
                <input type="text" placeholder="Digite aqui" />
              </div>
            </div>

            <div className="flexinput">
              <div>
                <h4>Cidade</h4>
                <input type="text" placeholder="Digite aqui" />
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
                <input type="text" placeholder="Selecione aqui" />
              </div>

              <div>
                <h4>Status</h4>
                <input type="text" placeholder="Selecione aqui" />
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
