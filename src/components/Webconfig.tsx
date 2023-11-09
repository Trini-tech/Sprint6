import { Form, Button, Stack } from "react-bootstrap";
import { ChangeEvent } from "react";
import { useMyContext } from "../contexts/MyContext";

export function Webconfig() {
  const { idiomValue, pagValue, setIdiomValue, setPagValue } = useMyContext();

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

  const handlePagMinusChange = () => {
    if (pagValue === 0) {
      setPagValue(0);
    } else {
      const newValue = pagValue - 1;
      setPagValue(newValue);
    }
  };

  const handlePagPlusChange = () => {
    const newValue = pagValue + 1;
    setPagValue(newValue);
  };

  const handleIdiomMinusChange = () => {
    if (idiomValue === 0) {
      setIdiomValue(0);
    } else {
      const newValue = idiomValue - 1;
      setIdiomValue(newValue);
    }
  };

  const handleIdiomPlusChange = () => {
    const newValue = idiomValue + 1;
    setIdiomValue(newValue);
  };

  const customButtonStyle = {
    width: "40px",
    height: "40px",
  };

  return (
    <div className="d-flex justify-content-end">
      <div className="w-25">
        <Form.Group className="d-flex inline-block justify-content-between pb-3 align-items-center">
          <Form.Label>Nombre de pàgines</Form.Label>
          <Stack direction="horizontal" gap={3} className="justify-content-end">
            <Button className="rounded-circle" type="button" id="menos" onClick={handlePagMinusChange} style={customButtonStyle}>
              -
            </Button>
            <Form.Control className="w-25" type="text" inputMode="numeric" min="0" value={pagValue} onChange={handlePagChange} />
            <Button className="rounded-circle" type="button" id="mas" onClick={handlePagPlusChange} style={customButtonStyle}>
              +
            </Button>
          </Stack>
        </Form.Group>
        <Form.Group className="d-flex inline-block justify-content-between pb-3 align-items-center">
          <Form.Label>Nombre d'idiomes</Form.Label>
          <Stack direction="horizontal" gap={3} className="justify-content-end">
            <Button className="rounded-circle" type="button" id="menos" onClick={handleIdiomMinusChange} style={customButtonStyle}>
              -
            </Button>
            <Form.Control className="w-25" type="text" inputMode="numeric" min="0" value={idiomValue} onChange={handleIdiomChange} />
            <Button className="rounded-circle" type="button" id="mas" onClick={handleIdiomPlusChange} style={customButtonStyle}>
              +
            </Button>
          </Stack>
        </Form.Group>
      </div>
    </div>
  );
}
