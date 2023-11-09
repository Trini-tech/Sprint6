import { Link } from "../Link";

import calc from "../assets/images/calc.svg";

export function HomePage() {
  return (
    <>
      <div className="text-center p-4">
        <h1>Generador de pressupostos</h1>
        <p>En aquesta pàgina podràs generar pressupostos per a la creació de webs</p>
      </div>
      <Link to="/calculator" target="_self">
        <div className="d-flex justify-content-center">
          <div className="card h-100 w-25">
            <div className="text-center p-4">
              <img src={calc} alt="" width={100} />
              <h5 className="fw-bolder pt-4">Crear pressupost</h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
