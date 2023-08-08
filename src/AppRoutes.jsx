import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormsCompany from "./pages/FormsCompany";
import Welcome from "./pages/Welcome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forms-company" element={<FormsCompany/>} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;