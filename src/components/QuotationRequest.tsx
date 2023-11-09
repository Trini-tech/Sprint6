import { Card, Button, Form, Stack } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useMyContext } from "../contexts/MyContext";

export function QuotationRequest() {
  const { idiomValue, setIdiomValue, pagValue, setPagValue, name, setName, phoneNumber, setPhoneNumber, email, setEmail, total, checkedState, setCheckedState, arrayinputs, setArrayInputs } = useMyContext();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setName(input);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Utilizamos una expresión regular para eliminar todos los caracteres no numéricos
    const numericInput = input.replace(/[^0-9]/g, "");
    setPhoneNumber(numericInput);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setEmail(input);
  };

  const isFormValid = () => {
    return name.trim() !== "" && phoneNumber.trim() !== "" && email.trim() !== "" && total > 0;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      console.log(checkedState);
      // Creamos un objeto con las propiedades que queremos almacenar por cada presupuesto
      const inputData = { name, phoneNumber, email, total, checkedState, idiomValue, pagValue };
      console.log(inputData);
      // Agregamos el objeto a la matriz de inputs
      setArrayInputs([...arrayinputs, inputData]);

      // Borramos los valores de los campos de entrada
      setName("");
      setPhoneNumber("");
      setEmail("");
      setIdiomValue(0);
      setPagValue(0);
      console.log(checkedState);
    }
  };

  return (
    <>
      <Card className="shadow-sm border-0 mb-4">
        <Card.Body>
          <h3>Demanar pressupost</h3>
          <p className="pb-3">Afegeix els serveis que vols comprar i omple els següents camps:</p>
          <Stack direction="horizontal" gap={3} className="justify-content-end w-100">
            <Form.Control type="text" placeholder="Nom" value={name} onChange={handleNameChange} />
            <Form.Control type="text" inputMode="numeric" placeholder="Telèfon" value={phoneNumber} onChange={handlePhoneNumberChange} />
            <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <Button className="w-75" onClick={handleSubmit} disabled={!isFormValid()}>
              Sol·licitar pressupost <AiOutlineArrowRight />
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
}
