import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de envío de formulario
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      //navigate('/');
    }, 3000); // Ocultar la alerta después de 3 segundos
  };

  return (
    <>
      <h1>CONTACTANOS...</h1>
      <p>
        Si tienes alguna pregunta, inquietud o simplemente quieres saber más sobre nuestros productos y servicios, no dudes en escribirnos. Estaremos encantados de ofrecerte la información y el apoyo que necesitas.
      </p>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="form-background p-4">
              {showAlert && (
                <div className="alert alert-secondary" role="alert">
                  ¡Consulta enviada con éxito!
                </div>
              )}
              <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="validationCustom01" className="form-label" style={{ textAlign: 'left', display: 'block', width: '100%' }}>Nombre</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="Tu nombre..." required />
                  <div className="valid-feedback">
                    ¡Perfecto!
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom02" className="form-label" style={{ textAlign: 'left', display: 'block', width: '100%' }}>Apellido</label>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Tu apellido..." required />
                  <div className="valid-feedback">
                    ¡Perfecto!
                  </div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustomUsername" className="form-label" style={{ textAlign: 'left', display: 'block', width: '100%' }}>E-mail</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="validationCustomUsername" placeholder="Tu correo electrónico..." aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                      Por favor, escribe un E-Mail válido.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label" style={{ textAlign: 'left', display: 'block', width: '100%' }}>Ciudad</label>
                  <input type="text" className="form-control" id="validationCustom03" placeholder="Tu ciudad..." required />
                  <div className="invalid-feedback">
                    Por favor, introduce una ciudad válida.
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom04" className="form-label" style={{ textAlign: 'left', display: 'block', width: '100%' }}>Provincia</label>
                  <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Elegir...</option>
                    <option>Santa Fe</option>
                    <option>Córdoba</option>
                    <option>Buenos Aires</option>
                  </select>
                  <div className="invalid-feedback">
                    Por favor, selecciona una provincia válida.
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <div className="mb-3" style={{ maxWidth: "400px", width: "100%" }}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Escríbenos aquí...</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label ms-2 text-start" htmlFor="invalidCheck">
                      Aceptar términos y condiciones
                    </label>
                    <div className="invalid-feedback">
                      Debes aceptar antes de enviar.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary mb-4" type="submit" style={{ width: "50%" }}>Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
