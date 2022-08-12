import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../components/Map";
const Register = () => {
  let navigate = useNavigate();
  const [client, setClient] = useState(null);

  const handleChange = (e) => {
    setClient(e.target.value);
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
            <div className="form-group my-3">
              <label>Tipo de Documento</label>
              <select
                className="form-select mt-1"
                aria-label="Default select example"
                onChange={handleChange}
                defaultValue={"0"}
              >
                <option>Selecciona un tipo de documento</option>
                <option value="1">CC</option>
                <option value="2">C.E</option>
                <option value="1">PASAPORTE</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Número de documento</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="51050652"
              />
            </div>
            <div className="form-group mt-3">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane "
              />
            </div>
            <div className="form-group mt-3">
              <label>Apellido</label>
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
              <label>Telefono</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Ingresa tu numero de telefono"
              />
            </div>

            <div className="form-group my-3">
              <label>Genero</label>
              <select
                className="form-select mt-1"
                aria-label="Default select example"
                onChange={handleChange}
                defaultValue={"0"}
              >
                <option>Seleciona una opción</option>
                <option value="1">F</option>
                <option value="2">M</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Contraseña </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder=""
              />
            </div>
            {client === "1" && (
              <>
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
                  <Map className="form-control mt-1" alt="" />
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
