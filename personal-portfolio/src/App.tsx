/// Librerias de react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/// Paginas
import { Home } from "./pages/home/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Path ruta por defecto */}
        <Route path="/" element={<Navigate to="home" />} />

        {/* Path de rutas */}
        <Route path="/home" element={<Home />} />

        {/* Path ruta no predefinida */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
