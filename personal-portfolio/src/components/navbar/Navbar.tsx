/// Estilos
import "./Navbar.css"


// Componente: Barra de navegacion
export const Navbar = () => {
    return (

        <header className="row">

            {/* Barra de navegacion */}
            <div className="col-12 d-flex flex-row align-items-center justify-content-between header">

                {/* Titulo pagina */}
                <h1 className="header__title">
                    <span>Maicol </span>
                    <span className="header__title-hight">Rojas</span>
                </h1>

                {/* Redirecciones */}
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
