import { useState, useEffect } from "react";
import { useWebconfig } from "../WebconfigContext";
import Card from "react-bootstrap/Card";
import { Service } from "../data/services";
import { Webconfig } from "../Webconfig";

export function CustomCard({ services }: { services: Service[] }) {
  const { idiomValue, pagValue, setIdiomValue, setPagValue } = useWebconfig();

  const newarray = new Array(services.length).fill(false);

  const [checkedState, setCheckedState] = useState(newarray);

  const [total, setTotal] = useState(0);

  const [showComponent, setShowComponent] = useState(false);

  const handleOnChange = (position: number) => {
    //Actualizar el estado del array de checkeds
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));

    setCheckedState(updatedCheckedState);

    //Actualizar total según los checks del array updatedCheckedState que son true
    const newTotal = updatedCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + services[index].price;
      }
      return sum;
    }, 0); // La suma empieza en 0. Cada vez que se clica el check se queda el total a 0 y vuelve a sumar lo que está como true en el array.

    //Al clicar el checkbox se ejecuta el handleOnChange y si coincide que es la última posición pasa el estado de false a true y viceversa.
    if (position === services.length - 1) {
      setShowComponent(!showComponent);
      if (updatedCheckedState[services.length - 1] === false) {
        setIdiomValue(0);
        setPagValue(0);
      }
    }

    // Comprobar si los valores son números válidos antes de realizar cálculos
    if (!isNaN(idiomValue) && !isNaN(pagValue)) {
      // Sumar idiomValue y pagValue al newTotal
      const totalPrice = newTotal + idiomValue * pagValue;
      setTotal(totalPrice);
    } else {
      // En caso de que alguno de los valores no sea un número válido, establecer el total en 0 u otra manejo de errores.
      setTotal(0);
    }
  };

  useEffect(() => {
    // UseEffect para detectar cambios en idiomValue, pagValue y checkedState, y recalcular totalPrice
    const newTotal = checkedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + services[index].price;
      }
      return sum;
    }, 0);
    // Sumar idiomValue y pagValue al newTotal
    const totalPrice = newTotal + (idiomValue + pagValue) * 30;
    setTotal(totalPrice);
  }, [idiomValue, pagValue, checkedState, services]);

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
              {index === services.length - 1 && showComponent && (
                <div className="p-4">
                  <Webconfig />
                </div>
              )}
            </Card>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-end py-5">
        <p className="me-4">Preu pressupostat:</p>
        <span id="calcul">{total}</span>
        <p>€</p>
      </div>
    </main>
  );
}
