import { services } from "../data/services";
import { CustomCard } from "../components/CustomCard";
import { Header } from "../components/Header";
import { Link } from "../Link";

export function CalculatorPage() {
  return (
    <>
      <Header></Header>
      <CustomCard services={services}></CustomCard>
      <Link to="/" target="_self">
        Ir a la home
      </Link>
    </>
  );
}
