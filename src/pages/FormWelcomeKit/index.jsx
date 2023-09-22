import Form from "./components/Form/Form";
import "./assets/css/style.css"
import LateralMenu from "../../components/LateralMenu";

const FormWelcomeKit = () => {

  return (
    <>
      <div className="container-page">
        <LateralMenu />
        <Form />
      </div>
    </>
  );
};

export default FormWelcomeKit;
