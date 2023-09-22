import Form from "./components/Form/Form";
import "./assets/css/style.css"
import LateralMenu from "../../components/LateralMenu";
import TopingMenu from "../../components/TopingMenu";

const FormWelcomeKit = () => {

  return (
    <>
      <div className="container-page">
        <LateralMenu />
        <TopingMenu />
        <Form />
      </div>
    </>
  );
};

export default FormWelcomeKit;
