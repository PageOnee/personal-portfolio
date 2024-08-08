/// Estilos
import "./Projects.css"


// Pagina : Proyectos
export const Projects = () => {
    return (

        <div className='container-fluid'>

            {/* Proyectos */}
            <div className='row height'>
                <div className='col-12 d-flex flex-column content-projects'>

                    <div className="col-12 d-flex flex-row title-projects">
                        <h2> Proyectos </h2>
                    </div>

                    <div className="col-12 d-flex flex-row justify-content-center text-temp">
                        <p className="text-center"> Actualmente, no hay proyectos disponibles en este apartado. ¡Mantente atento para futuras actualizaciones! </p>
                    </div>

                </div>
            </div>

        </div >
    )
}
