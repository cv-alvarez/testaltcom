import React from "react";
import "./index.css";
import Footer from "../../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="container">
        {" "}
        <div className="row">
          <div className="col-md-12">
            <div className="about-container">
              <h2 className="about-title mb-5">Sobre Nosotros</h2>
              <p>
                Somos una empresa especializada en el{" "}
                <span class="highlight">
                  suministro y soluciones integrales de seguridad industrial
                </span>{" "}
                en general. Nuestro enfoque se centra en brindar productos y
                servicios de alta calidad que garanticen la{" "}
                <span class="highlight">prevención y protección personal</span>{" "}
                en el entorno laboral y los procesos industriales.
              </p>
              <p>
                En nuestra amplia gama de productos, ofrecemos una variedad de
                opciones para la{" "}
                <span class="highlight">
                  prevención y protección personal en el trabajo
                </span>
                . Estamos comprometidos en proporcionar equipos de seguridad
                confiables y cumplir con los estándares más exigentes en la
                industria.
              </p>
              <p>
                Nuestro objetivo es brindar{" "}
                <span class="highlight">soluciones personalizadas</span> que se
                adapten a las necesidades específicas de cada cliente. Contamos
                con un equipo de expertos capacitados que pueden asesorarte en
                la selección de los equipos de protección adecuados para tu
                industria y entorno de trabajo.
              </p>
              <p>
                Además de ofrecer equipos de protección personal, también
                brindamos soluciones para el{" "}
                <span class="highlight">control de riesgos</span> y la{" "}
                <span class="highlight">
                  prevención de accidentes en los procesos industriales
                </span>
                . Esto incluye sistemas de detección de gases, equipos de
                seguridad en altura y productos para el control de derrames.
              </p>
              <p>
                En nuestra empresa, la seguridad es nuestra prioridad.
                Trabajamos arduamente para asegurar que nuestros clientes tengan
                acceso a los mejores productos y servicios que les permitan
                cumplir con los más altos estándares de seguridad en su lugar de
                trabajo. Confía en nosotros para proteger a tu equipo y
                garantizar un{" "}
                <span class="highlight">
                  entorno laboral seguro y productivo
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
