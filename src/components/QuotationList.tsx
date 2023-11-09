import { Card, Container, Row, Col } from "react-bootstrap";
import { useMyContext } from "../contexts/MyContext";

export function QuotationList() {
  const { arrayinputs, services } = useMyContext();
  const reversedArrayinputs = [...arrayinputs].reverse();
  const isLastChecked = reversedArrayinputs.length > 0 && reversedArrayinputs[0].checkedState[reversedArrayinputs[0].checkedState.length - 1];

  return (
    <>
      <h3 className="p-3">Pressupostos en curs:</h3>
      <ul style={{ padding: 0 }}>
        {reversedArrayinputs.map(({ name, phoneNumber, email, total, checkedState, idiomValue, pagValue }, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <Card className="shadow-sm border-1 mb-4">
              <Card.Body className="d-flex p-4">
                <Container>
                  <Row>
                    <Col>
                      <div>
                        <h4>{name}</h4>
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <strong>Serveis contractats</strong>
                        <ul style={{ paddingLeft: "20px" }}>
                          {checkedState.map(
                            (isChecked, serviceIndex) =>
                              isChecked && (
                                <li key={serviceIndex} style={{ listStyleType: "initial" }}>
                                  {services[serviceIndex].title}
                                </li>
                              )
                          )}
                        </ul>
                        {isLastChecked && (
                          <>
                            <p>Idioma: {idiomValue}</p>
                            <p>Páginas: {pagValue}</p>
                          </>
                        )}
                      </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <div>
                        <p>Total:</p>
                        <div className="d-flex">
                          <p>{total}</p>
                          <p>€</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
