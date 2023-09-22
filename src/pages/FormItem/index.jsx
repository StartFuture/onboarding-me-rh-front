import FormItem from "./components/Form/FormItem";
import "./assets/css/style.css"
import LateralMenu from "../../components/LateralMenu";
import TopingMenu from "../../components/TopingMenu";


const FormWelcomeKit = () => {

  return (
    <>
      <div className="container-page">
        <LateralMenu />
        <TopingMenu />
        <FormItem />
      </div>
    </>
  );
};

export default FormWelcomeKit;
