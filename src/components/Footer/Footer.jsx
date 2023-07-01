import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Menús</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/contactanos">Contáctanos</Link>
              </li>
              <li>
                <Link to="/about">Nosotros</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <div className="div">
                  <FontAwesomeIcon icon={faPhone} />
                  <span style={{ marginLeft: "10px" }} className="contact-text">
                    994185990
                  </span>
                </div>
              </li>
              <li>
                <div className="div">
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span style={{ marginLeft: "10px" }} className="contact-text">
                    994185990
                  </span>
                </div>
              </li>
              <li>
                <div className="div">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span style={{ marginLeft: "10px" }} className="contact-text">
                    distribuidoires@sekurperu.com.pe
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Síguenos en:</h5>
            <FontAwesomeIcon icon={faFacebook} />
            <h5>Todos los Derechos Reservados</h5>
            <p>2023 © Altcom</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
