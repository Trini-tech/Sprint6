import { services } from "./data/services";
import { CustomCard } from "./CustomCard";
import { Header } from "./Header";
import { WebconfigProvider } from "./WebconfigContext";

export function App() {
  return (
    <WebconfigProvider>
      <div className="p-4">
        <Header></Header>
        <CustomCard services={services}></CustomCard>
      </div>
    </WebconfigProvider>
  );
}
