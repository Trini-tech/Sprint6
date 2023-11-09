import { Header } from "../components/Header";
import { CustomCard } from "../components/CustomCard";
import { QuotationRequest } from "../components/QuotationRequest";
import { QuotationList } from "../components/QuotationList";
import { Link } from "../Link";

export function CalculatorPage() {
  return (
    <>
      <Header></Header>
      <CustomCard></CustomCard>
      <QuotationRequest></QuotationRequest>
      <QuotationList></QuotationList>
      <Link to="/" target="_self">
        Ir a la home
      </Link>
    </>
  );
}
