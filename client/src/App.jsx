import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext";

import Navbar from "./pages/components/Navbar";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import Home from "./pages/home";
import Crear_reserva from "./pages/crear_reserva";
import Crear_comentario from "./pages/crear_comentario";
import Ver_vehiculos from "./pages/ver_vehiculos";
import Ver_reservas from "./pages/ver_reservas";

import ProtectedRoute from "./ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar /> {/* Navbar fuera de <Routes> para que esté en todas las páginas */}
        <Routes>
          {/* Rutas no protegidas */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/crear_reserva" element={<Crear_reserva />}></Route>
            <Route path="/crear_comentario" element={<Crear_comentario />}></Route>
            <Route path="/ver_vehiculos" element={<Ver_vehiculos />}></Route>
            <Route path="/ver_reservas" element={<Ver_reservas />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;