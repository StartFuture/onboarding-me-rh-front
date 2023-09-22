import "./assets/css/style.css";
import Timeline from "../../components/TimeLine";
import Form from "./components/Form/Form";

const FormsCompany = () => {
  return (
    <>
      <div className="conteudo">
        <Timeline currPage="0" isCompany="true" />
        <Form />
      </div>
    </>
  );
};

export default FormsCompany;
