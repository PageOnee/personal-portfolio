/// Librerias de react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/// Paginas

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Path ruta por defecto */}
        <Route path="/" element={<Navigate to="" />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
