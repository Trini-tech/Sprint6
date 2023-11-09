import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./contexts/MyContext";
import { HomePage } from "./pages/HomePage";
import { CalculatorPage } from "./pages/CalculatorPage";
import { Service } from "./types/types";
import servicesData from "./data/servicesData.json"; // Importa los datos desde el archivo JSON

export const services: Service[] = servicesData;

export function App() {
  return (
    <MyContextProvider services={services}>
      <div className="p-4">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </MyContextProvider>
  );
}
