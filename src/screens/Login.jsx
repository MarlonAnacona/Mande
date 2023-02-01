import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api/users";
import Swal from "sweetalert2";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setIsLogged } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };

    setLoading(true);

    loginUser(data)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("userData", JSON.stringify(response));

        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          text: "Te has logueado correctamente",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCancelButton: false,
        }).then(() => {
          setIsLogged(true);
        });
      })
      .catch((err) => {
        onError(err);
        setLoading(false);
      });
  };

  const onError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Opps algo salió mal",
      text: "Usuario o contraseña incorrectos, intenta de nuevo",
      confirmButtonText: "Continuar",
      allowOutsideClick: false,
      showCancelButton: false,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div className="Auth-form-container">
        <form onSubmit={handleSubmit} className="Auth-form">
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
                name="email"
                placeholder="Ingresa tu correo electronico"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
                className="form-control mt-1"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary"
              >
                {!loading ? "Ingresar" : <span className="loader"></span>}
              </button>
            </div>
            <p className="text-center mt-2">
              Olvidaste tu contraseña <a href="#">Recuperar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
