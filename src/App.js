import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Cliente from "./screens/Cliente";
import ClienteSettings from "./screens/ClienteSettings";
import ClientePerfil from "./screens/ClientePerfil";
import SideBar from "./components/SideBar";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

        
        
      </Routes>

      <SideBar>
        <Routes>
      <Route path="/cliente" element={< Cliente />} />
      
      
      <Route path="/Ajustes" element={< ClienteSettings />} />
      <Route path="/Perfil" element={< ClientePerfil />} />
      </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
