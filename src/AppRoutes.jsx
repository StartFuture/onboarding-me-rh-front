import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormsCompany from "./pages/FormsCompany";
import Welcome from "./pages/Welcome";
import FormAccess from "./pages/FormAccess";
import FirstAccess from "./pages/FirstAccess";
import WelcomeKit from "./pages/WelcomeKit";
import CadWelcomeKit from "./pages/CadWelcomeKit";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forms-company" element={<FormsCompany/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/form-access" element={<FormAccess/>} />
        <Route path="/first-access" element={<FirstAccess/>} />
        <Route path="/welcome-kit" element={<WelcomeKit/>} />
        <Route path="/cad-welcome-kit" element={<CadWelcomeKit/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;