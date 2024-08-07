/// Estilos
import "./Navbar.css"

// Componente: Barra de navegacion
export const Navbar = () => {
    return (

        <header className="row">

            <div className="col-12 d-flex flex-row align-items-center justify-content-between header ">
                <a className="header__title" href="/"> Maicol Rojas </a>

                <nav className="header__navbar">
                    <a href="/"> Inicio </a>
                    <a href="/"> Proyectos </a>
                    <a href="/"> Sobre Mi </a>
                    <a href="/"> Contacto </a>
                </nav>
            </div>


        </header>
    )
}
