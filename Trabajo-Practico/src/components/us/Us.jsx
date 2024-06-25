import Uno from "../../assets/us/1.jpg";
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
                    <h2>Servicios</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-container">
                                <img src={Uno} alt="Feature 1" className="feature-image" />
                                <h3>Atención nutricional</h3>
                                <p>Ofrecemos soporte nutricional a través de una variedad de canales, incluyendo chat en vivo, teléfono y redes sociales.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <img src="feature2.png" alt="Feature 2" />
                                <h3>Venta de suplementos</h3>
                                <p>Estamos aquí para ofrecerte el apoyo que necesitas para alcanzar tus metas deportivas y llevar un estilo de vida activo y saludable.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature">
                                <img src="feature3.png" alt="Feature 3" />
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
                                <p>Zendesk nos ha ayudado a reducir nuestro tiempo de respuesta a los tickets en un 50% y aumentar nuestra tasa de satisfacción del cliente en un 10%.</p>
                                <p><strong>John Doe</strong>, CEO de Acme Corporation</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>Zendesk es una herramienta esencial para nuestro negocio. Nos ha ayudado a mejorar la comunicación con nuestros clientes y a resolver problemas de manera más eficiente.</p>
                                <p><strong>Jane Smith</strong>, Directora de atención al cliente de ABC Company</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <div className="container">
                    <h2>Comienza tu prueba gratuita hoy mismo</h2>
                    <p>Experimenta la potencia de Zendesk y descubre cómo puede ayudarte a mejorar tu experiencia de cliente.</p>
                    <a href="#" className="btn"></a>
                </div>
            </section>
        </>
    );
}

export default Us

