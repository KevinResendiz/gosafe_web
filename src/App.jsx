import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import AdminConductor from "./pages/AdminConductor";
import AdminPasajero from "./pages/AdminPasajero";
import Vehiculos from "./pages/Vehiculos";

function App() {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Homepage />} />

      {/* Página de Login */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard con barra lateral */}
      <Route path="/dashboard" element={<LayoutWithSidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="conductores" element={<AdminConductor />} />
        <Route path="pasajeros" element={<AdminPasajero />} />
        <Route path="vehiculos" element={<Vehiculos />} />
      </Route>

      {/* Redirección si la ruta no existe */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

// Layout que incluye la barra lateral
function LayoutWithSidebar() {
  return (
    <div style={{ display: "flex", backgroundColor:"#e1e9f0"}}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="conductores" element={<AdminConductor />} />
          <Route path="pasajeros" element={<AdminPasajero />} />
          <Route path="vehiculos" element={<Vehiculos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
