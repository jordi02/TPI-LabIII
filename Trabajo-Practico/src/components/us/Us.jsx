import Uno from "../../assets/us/1.jpg";
import Dos from "../../assets/us/2.png";
import Tres from "../../assets/us/3.jpeg";
import "./Us.css";

function Us() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>Bienvenido a PUROHABITO, tu tienda de suplementos deportivos de calidad</h1>
                    <p className="mt-5">En PUROHABITO, estamos dedicados a apoyar tu rendimiento deportivo y tu bienestar general a través de productos nutricionales especializados. Fundada por un grupo de nutricionistas con experiencia en deporte, nuestra misión es proporcionar a atletas y entusiastas del fitness los recursos necesarios para alcanzar sus metas de manera efectiva y sostenible.</p>
                    <p>Entendemos que la nutrición juega un papel crucial en el rendimiento deportivo y la recuperación. Por eso, hemos creado este espacio dedicado a la venta de suplementos deportivos, seleccionando cuidadosamente cada producto para asegurarnos de ofrecer solo lo mejor. Ya sea que estés buscando mejorar tu resistencia, ganar masa muscular o recuperarte más rápidamente después del entrenamiento, estamos aquí para guiarte en cada paso del camino.</p>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2 className="row mt-4 justify-content-center">Servicios</h2>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="feature-container">
                                <img src={Uno} alt="Feature 1" className="feature-image" />
                                <h3>Atención nutricional</h3>
                                <p>Ofrecemos soporte nutricional a través de una variedad de canales, incluyendo chat en vivo, teléfono y redes sociales.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-container">
                                <img src={Dos} alt="Feature 2" className="feature-image" />
                                <h3>Venta de suplementos</h3>
                                <p>Estamos aquí para ofrecerte el apoyo que necesitas para alcanzar tus metas deportivas y llevar un estilo de vida activo y saludable.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-container">
                                <img src={Tres} alt="Feature 2" className="feature-image" />
                                <h3>Asesoramiento en la compra</h3>
                                <p>No solo nos comprometemos a proporcionarte productos de alta calidad, sino también a compartir nuestro conocimiento y experiencia para ayudarte a tomar decisiones informadas sobre el consumo y adquisicion de los suplementos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="container">
                    <h2>Testimonios</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p className="mt-3" style={{ fontStyle: 'italic' }}>El asesoramiento en la compra y consumo de suplementos en PUROHABITO es de primera clase. Siempre he tenido dudas sobre qué productos son los mejores para mis objetivos de fitness, pero el equipo aquí es increíblemente conocedor y me ha guiado a través de cada paso del proceso. Gracias por su ayuda</p>
                                <p><strong>John Doe</strong>, CEO de Acme Corporation</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p className="mt-3" style={{ fontStyle: 'italic' }}>La atención nutricional en PUROHABITO es simplemente excelente. Desde que comencé a trabajar con sus nutricionistas especializados en deporte, he visto una mejora significativa en mi rendimiento y bienestar general. Ellos realmente entienden las necesidades específicas de los atletas y me han proporcionado un plan de nutrición personalizado que ha marcado la diferencia en mi entrenamiento y competencia. ¡Altamente recomendados!</p>
                                <p><strong>Jane Smith</strong>, Directora de atención al cliente de ABC Company</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <div className="container">
                    <h2 className="mt-4">Comienza con nosotros hoy mismo</h2>
                    <p style={{ fontWeight: "bold" }}>Experimenta la potencia de PUROHABITO y descubre cómo puede ayudarte a mejorar tu rendimiento deportivo.</p>
                    <a href="#" className="btn"></a>
                </div>
            </section>
        </>
    );
}

export default Us

