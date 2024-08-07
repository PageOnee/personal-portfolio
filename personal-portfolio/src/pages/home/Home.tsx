/// Componentes
import { Navbar } from "../../components/navbar/Navbar"

/// Iconos 


/// Estilos
import "./Home.css"

// Pagina: Inicio
export const Home = () => {
    return (
        <div className="container-fluid ">

            <div className="row height">

                <div className="col-12 d-flex flex-column">

                    <Navbar />

                    <div className="row">
                        <div className="col-12 d-flex flex-row align-items-center justify-content-between content">

                            <div className="container-content">
                                <h2 className="subtitle-page"> Ingeniero de Sistemas </h2>
                                <h1 className="title-page">
                                    <span>Maicol </span>
                                    <span className="color-sec">Rojas</span>
                                </h1>

                                <h3 className="d-flex flex-column">
                                    <span>Desarrollador Full Stack con experiencia en el diseño, desarrollo</span>
                                    <span>e implementación de aplicaciones web</span>
                                </h3>

                                <div className="d-flex flex-row mt-4">
                                    <button className="button">
                                        <span>Descargar CV</span>
                                    </button>

                                    <button className="ms-5 button">
                                        <span>Ver Proyectos</span>
                                    </button>
                                </div>
                            </div>




                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
