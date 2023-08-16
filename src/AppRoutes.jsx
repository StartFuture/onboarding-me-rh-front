import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormsCompany from "./pages/FormsCompany";
import Welcome from "./pages/Welcome";
import FormAcess from "./pages/FormAcess/assets/components";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forms-company" element={<FormsCompany/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/form-acess" element={<FormAcess/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;