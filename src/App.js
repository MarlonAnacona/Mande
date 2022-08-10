import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Cliente from "./screens/Cliente";
import ClienteSettings from "./screens/ClienteSettings";
import ClientePerfil from "./screens/ClientePerfil";
import SideBar from "./components/SideBar";
import Maps from "./components/Map";

function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />

          <Route path="/client" element={<Cliente />} />

          <Route path="/settings" element={<ClienteSettings />} />
          <Route path="/profile" element={<ClientePerfil />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
