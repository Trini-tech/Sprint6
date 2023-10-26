import { Form } from "react-bootstrap";
import { ChangeEvent } from "react";
import { useWebconfig } from "./WebconfigContext";

export function Webconfig() {
  const { idiomValue, pagValue, setIdiomValue, setPagValue } = useWebconfig();

  const handlePagChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);

    // Verifica si el valor es un número válido antes de actualizar el estado
    if (!isNaN(newValue)) {
      setPagValue(newValue);
    } else {
      // Puedes manejar el valor no válido de alguna manera, como establecerlo en 0
      setPagValue(0);
    }
  };

  const handleIdiomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);

    // Verifica si el valor es un número válido antes de actualizar el estado
    if (!isNaN(newValue)) {
      setIdiomValue(newValue);
    } else {
      // Puedes manejar el valor no válido de alguna manera, como establecerlo en 0
      setIdiomValue(0);
    }
  };

  return (
    <div className="d-flex justify-content-end">
      <div className="w-25">
        <Form.Group className="d-flex inline-block justify-content-between pb-3">
          <Form.Label>Nombre de pàgines</Form.Label>
          <Form.Control className="w-25" type="text" inputMode="numeric" min="0" value={pagValue} onChange={handlePagChange} />
        </Form.Group>
        <Form.Group className="d-flex inline-block justify-content-between pb-3">
          <Form.Label>Nombre d'idiomes</Form.Label>
          <Form.Control className="w-25" type="text" inputMode="numeric" min="0" value={idiomValue} onChange={handleIdiomChange} />
        </Form.Group>
      </div>
    </div>
  );
}
