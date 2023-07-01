import React, { useState } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import Footer from "../../Footer/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí debes reemplazar los valores con tu propio User ID y Template ID
    emailjs
      .send(
        "service_tjmnimj",
        "template_ept4fta",
        {
          from_name: name,
          email: email,
          message: message,
        },
        "14prgIXHU8qpAEgLM"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Aquí puedes realizar alguna acción adicional después de enviar el correo
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Aquí puedes manejar el error o mostrar un mensaje de error al usuario
      });

    // Reinicia los campos del formulario
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <h2>Contactanos</h2>
          <p>
            ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros si
            tienes alguna pregunta o comentario.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <p>Teléfono: 994185990</p>
            </div>
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <p>Email: distribuidoires@sekurperu.com.pe</p>
            </div>
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <p>Dirección: Calle Principal #123, Ciudad, País</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Enviar
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
