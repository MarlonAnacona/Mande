import React from "react";
import Map from "../components/Map";
import { LoginContext } from "../context/LoginContext";

const Cliente = () => {
  const { setIsLogged } = React.useContext(LoginContext);

  const logout = () => {
    localStorage.removeItem("userData");
    setIsLogged(false);
  };

  return (
    <div className="container">
      <button className="btn btn-danger" onClick={logout}>
        Cerrar sesion
      </button>
      <Map />
    </div>
  );
};
export default Cliente;
