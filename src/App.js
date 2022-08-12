import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Cliente from "./screens/Cliente";
import ClienteSettings from "./screens/ClienteSettings";
import ClientePerfil from "./screens/ClientePerfil";
import SideBar from "./components/SideBar";
import { useContext } from "react";
import { LoginContext } from "./context/LoginContext";

function App() {
  const { isLogged } = useContext(LoginContext);

  return (
    <BrowserRouter>
      {isLogged ? (
        <SideBar>
          <Routes>
            <Route path="/" element={<Cliente />} />
            <Route path="/client" element={<Cliente />} />
            <Route path="/settings" element={<ClienteSettings />} />
            <Route path="/profile" element={<ClientePerfil />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SideBar>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
