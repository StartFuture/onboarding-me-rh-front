import "./style.css"
import Logo from "../../assets/img/Logo.svg"
import TimelineIcon from "../../assets/img/timeline-icon.svg"
import SelectedTimelineIcon from "../../assets/img/selected-timeline-icon.svg"

const Timeline = ({currPage, isCompany}) => {
  return (
    <div className="timeline">
      <div style={{display: isCompany === 'true' ? "flex" : "none"}}>
        <img src={currPage === '0' ? SelectedTimelineIcon : TimelineIcon} alt="timeline icon"/>
        <label>Dados Cadastrais</label>
      </div>
      <div>
        <img src={currPage === '1' ? SelectedTimelineIcon : TimelineIcon} alt="timeline icon"/>
        <label>Dados de Acesso</label>
      </div>
      <div>
        <img src={currPage === '2' ? SelectedTimelineIcon : TimelineIcon} alt="timeline icon"/>
        <label>Bem Vindo</label>
      </div>
      <img className="timeline-logo" src={Logo} />
    </div>
  );
};

export default Timeline