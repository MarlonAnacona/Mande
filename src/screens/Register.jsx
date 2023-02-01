import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addUser } from "../services/api/users";
const Register = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    tipoDocumento: "",
    numeroDocumento: "",
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    genero: "",
    password: "",
    direccion: "12345",
    tipousuario: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };

    Swal.fire({
      title: "Atención, estás seguro de realizar esta acción",
      text: "Vas a registrarte como un nuevo usuario",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      showLoaderOnConfirm: true,
      cancelButtonColor: "#d33",
      confirmButtonText: `Confirmar`,
      allowOutsideClick: false,
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        return new Promise((resolve, reject) => {
          addUser(data)
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "Operación exitosa",
                text: "Te has registrado correctamente",
                confirmButtonText: "Continuar",
                allowOutsideClick: false,
                showCancelButton: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login");
                }
              });
            })
            .catch((err) => {
              if (err.response.status === 412) {
                onError(err.response.data);
                console.log(err.response.data);
              } else {
                console.log("error");
                onError("Error al crear el cargo, intenta de nuevo.");
              }

              console.log(err);
            });
        });
      },
    });
  };

  const onError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Opps algo salió mal",
      text: "Ocurrió un error al crear el usuario, intenta de nuevo",
      confirmButtonText: "Continuar",
      allowOutsideClick: false,
      showCancelButton: false,
    });
  };

  return (
    <div className="App">
      <div className="Auth-form-container">
        <form onSubmit={handleSubmit} className="Auth-form">
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
                name="tipousuario"
                required
                defaultValue=""
              >
                <option value="" disabled={true}>
                  Selecciona un tipo de usuario
                </option>
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
                name="tipoDocumento"
                required
                defaultValue=""
              >
                <option disabled={true} value="">
                  Selecciona un tipo de documento
                </option>
                <option value="CC">CC</option>
                <option value="C.E">C.E</option>
                <option value="PASAPORTE">PASAPORTE</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Número de documento</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Ingresa tu numero de documento"
                onChange={handleChange}
                name="numeroDocumento"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Ingresa tu nombre"
                onChange={handleChange}
                name="nombre"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Apellido</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Ingresa tu apellido"
                onChange={handleChange}
                name="apellido"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Correo electronico</label>
              <input
                type="email"
                className="form-control mt-1"
                onChange={handleChange}
                placeholder="Ingresa tu correo electronico"
                name="email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Telefono</label>
              <input
                type="text"
                className="form-control mt-1"
                onChange={handleChange}
                placeholder="Ingresa tu numero de telefono"
                name="telefono"
                required
              />
            </div>

            <div className="form-group my-3">
              <label>Genero</label>
              <select
                className="form-select mt-1"
                aria-label="Default select example"
                onChange={handleChange}
                defaultValue=""
                name="genero"
                required
              >
                <option disabled={true} value="">
                  Seleciona una opción
                </option>
                <option value="F">F</option>
                <option value="M">M</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Contraseña </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingresa tu contraseña"
                name="password"
                required
                onChange={handleChange}
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Registrarse
              </button>
            </div>
            <p className="text-center mt-2"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
