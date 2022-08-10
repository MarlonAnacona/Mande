import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [client, setClient] = useState(null);

  const handleChange = (e) => {
    setClient({ ...client, [e.targer.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...client,
      cc: "1231231",
    };
  };

  const [tarjet, setTarjet] = useState(null);

  const handleChange1 = (e1) => {
    setTarjet(e1.target.value);
  };

  return (
    <div className="App">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div
            style={{ height: "500px", overflow: "scroll", overflowX: "hidden" }}
            className="Auth-form-content"
          >
            <h3 className="Auth-form-title">Registro</h3>
            <div className="text-center">
              Ya estas registrado?{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/login")}
                className="link-primary"
              >
                Ingresa
              </span>
            </div>
            <div className="form-group my-3">
              <label>Tipo de usuario</label>
              <select
                className="form-select mt-1"
                aria-label="Default select example"
                onChange={handleChange}
                defaultValue={"0"}
              >
                <option>Selecciona un tipo de usuario</option>
                <option value="1">Cliente</option>
                <option value="2">Trabajador</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Nombre completo</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Correo electronico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ingresa tu correo electronico"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            {client === "1" && (
              <>
                <div className="form-group mt-3">
                  <label>Cedula</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder=""
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Celular </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder=""
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Tipo de tarjeta</label>
                  <select
                    className="form-select mt-2"
                    aria-label="Default select example"
                    onChange={handleChange1}
                    defaultValue={"0"}
                  >
                    <option>Selecciona el tipo de tarjeta</option>
                    <option value="1">Credito</option>
                    <option value="2">Debito</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label>Direccion</label>
                  <img
                    src="https://fortnite.gg/img/og-map.jpg?21"
                    className="form-control mt-1"
                    alt=""
                  />
                </div>
              </>
            )}

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Registrarse
              </button>
            </div>
            <p className="text-center mt-2">
              {/*    Forgot <a href="*">password?</a> */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
