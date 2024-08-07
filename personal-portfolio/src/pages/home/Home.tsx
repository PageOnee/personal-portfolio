/// Componentes
import { Navbar } from "../../components/navbar/Navbar"

import "./Home.css"

// Pagina: Inicio
export const Home = () => {
    return (
        <div className="container-fluid ">

            <div className="row height">

                <div className="col-12 d-flex flex-column">

                    <Navbar />

                    <div className="row">
                        <div className="col-12 d-flex flex-column align-items-center justify-content-center content">

                            <div className="">
                                <h2 className="subtitle-page"> Ingeniero de Sistemas </h2>
                                <h1 className="title-page">
                                    Maicol Rojas
                                </h1>

                                <div className="d-flex flex-row">
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
