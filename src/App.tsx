import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebconfigProvider } from "./WebconfigContext";
import { HomePage } from "./pages/HomePage";
import { CalculatorPage } from "./pages/CalculatorPage";

export function App() {
  return (
    <WebconfigProvider>
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
    </WebconfigProvider>
  );
}
