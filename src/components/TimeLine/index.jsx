import "./style.css"
const Timeline = () => {
  return (
    <div className="timeline">
      <div className="divinput">
        <label >
          <input type="radio" />
          Dados Cadastrais
        </label>
        <label >
          <input type="radio" />
          Dados Acesso
        </label>
        <label >
          <input type="radio" />
          Bem Vindos
        </label>
      </div>
    </div>
  );
};

export default Timeline