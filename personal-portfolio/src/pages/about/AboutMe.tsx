/// Estilos 
import "./AboutMe.css"

export const AboutMe = () => {
    return (
        <div className="container-fluid">

            {/* Informacion Personal */}
            <div className="row height">
                <div className="col-12 d-flex flex-column content-about">

                    {/* Encabezado */}
                    <div className="col-12 d-flex flex-row title-about">
                        <h2> Sobre Mi</h2>
                    </div>

                    <div className="row">
                        <div className="col-6 d-flex flex-row justify-content-center
                        align-items-center my-5 description-about">
                            <p className="">Ingeniero de Sistemas, especializado en el desarrollo de
                                aplicaciones full stack. Con una sólida
                                formación académica y experiencia práctica en la industria, me dedico a
                                crear soluciones tecnológicas eficientes y escalables. Mi enfoque abarca
                                desde la implementación de interfaces de usuario intuitivas y atractivas
                                hasta la arquitectura de microservicios robusta y segura en el lado del
                                servidor.</p>
                        </div>

                        <div className="col-6 my-5 d-flex flex-row flex-wrap skills">
                            <span className="skill-container"> HTML </span>
                            <span className="skill-container"> CSS </span>
                            <span className="skill-container"> Bootstrap </span>
                            <span className="skill-container"> TypeScript </span>
                            <span className="skill-container"> React </span>
                            <span className="skill-container"> Angular </span>
                            <span className="skill-container"> Java </span>
                            <span className="skill-container"> SpringBoot </span>
                            <span className="skill-container"> Python </span>
                        </div>
                    </div>
                    {/* Contenido */}

                </div>
            </div>

        </div>
    )
}
