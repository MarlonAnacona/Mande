import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  return (

    <div className="App">

      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">

            <h3 className="Auth-form-title">Ingresar</h3>
            <div className="text-center">
              No estas registrado?{" "}
              <span
                style={{ cursor: "pointer" }}
                className="link-primary"
                onClick={() => navigate("/register")}
              >
                Registrarse
              </span>
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
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={() => navigate("/cliente")}>
                Ingresar

              </button>
            </div>
            <p className="text-center mt-2">
              Olvidaste tu contraseña <a href="*">Recuperar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
