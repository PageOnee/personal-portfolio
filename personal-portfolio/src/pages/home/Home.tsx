/// Componentes
import { Navbar } from "../../components/navbar/Navbar"

/// Estilos
import "./Home.css"


// Pagina: Inicio
export const Home = () => {
    return (

        <div className="container-fluid ">

            <div className="row height">
                <div className="col-12 d-flex flex-column">

                    {/* Barra de Navegacion */}
                    <Navbar />

                    {/* Informacion Principal */}
                    <div className="row">
                        <div className="col-12 d-flex flex-column content">

                            <div className="col-12 d-flex flex-row align-items-center justify-content-between">

                                <div className="col-6">
                                    {/* Informacion Principal */}
                                    <div className="d-flex flex-column">
                                        <h2 className="subtitle"> Software Developer </h2>
                                        <h1 className="title">
                                            <span>Hola, Soy </span>
                                            <span className="title__hight">Maicol Rojas</span>
                                        </h1>

                                        <h3 className="d-flex flex-column description">
                                            <span>Desarrollador Full Stack con experiencia en diseño, desarrollo</span>
                                            <span>e implementación de aplicaciones web</span>
                                        </h3>
                                    </div>
                                </div>

                                <div className="col-6"></div>
                            </div>

                            <div className="col-12 d-flex flex-row align-items-center">

                                {/* Informacion Laboral */}
                                <div className="d-flex flex-row mt-4">

                                    {/* Descargar CV */}
                                    <button className="button me-2">
                                        <span className="d-flex flex-row align-items-center">
                                            Descargar CV
                                            <i className='bx bxs-download bx-flashing bx-sm ms-3' ></i>
                                        </span>
                                    </button>

                                    {/* Git Hub */}
                                    <button className="btn-social d-flex flex-row align-items-center justify-content-center mx-2">
                                        <i className='bx bxl-github bx-md'></i>
                                    </button>

                                    {/* LinkedIn */}
                                    <button className="btn-social d-flex flex-row align-items-center justify-content-center mx-2">
                                        <i className='bx bxl-linkedin-square bx-md'></i>
                                    </button>

                                    {/* Email */}
                                    <button className="btn-social d-flex flex-row align-items-center justify-content-center mx-2">
                                        <i className='bx bxl-gmail bx-md' ></i>
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div >

        </div >
    )
}
