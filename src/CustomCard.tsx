import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Service } from "./data/services";

export function CustomCard({ services }: { services: Service[] }) {
  const [checkedState, setCheckedState] = useState(new Array(services.length).fill(false));

  const [total, setTotal] = useState(0);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + services[index].price;
      }
      return sum;
    }, 0); // Parte de 0 la suma. Cada vez que se clica el check se queda el total a 0 y vuelve a sumar lo que está como true en el array.

    setTotal(totalPrice);
  };

  return (
    <main className="web-services">
      <ul style={{ padding: 0 }}>
        {services.map(({ title, description, price }, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <Card className="mb-3 shadow-sm border-0">
              <Card.Body className="d-flex justify-content-between">
                <div>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </div>
                <div className="d-flex align-items-center">
                  <p style={{ padding: 0 }}>{price}€</p>
                </div>
                <div className="d-flex align-items-center">
                  <input className="me-2" type="checkbox" name={title} id={`custom-checkbox-${index}`} value={price} checked={checkedState[index]} onChange={() => handleOnChange(index)} />
                  Afegir
                </div>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-end">
        <p className="me-4">Preu pressupostat:</p>
        <span id="calcul">{total}</span>
        <p>€</p>
      </div>
    </main>
  );
}
