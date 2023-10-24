import { services } from "./data/services";
import { CustomCard } from "./CustomCard";
import { Header } from "./Header";

export function App() {
  return (
    <>
      <div className="p-4">
        <Header></Header>
        <CustomCard services={services}></CustomCard>
      </div>
    </>
  );
}
