import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const AyudaComponente = () => {
  const handleLinkClick = () => {
    // Lógica adicional si es necesario
  };

  return (
    <a
      href={`https://wa.me/+51994185990?text=¡Hola! Me gustaría más información acerca de: `} // Reemplaza "tunumero" con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
      }}
      onClick={handleLinkClick}
    >
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "15px",
            borderRadius: "20px",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              position: "relative",
              zIndex: 1,
              marginRight: "5px",
            }}
          >
            Necesitas ayuda?
          </span>
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: "-7px",
              right: "15px",
              width: "0",
              height: "0",
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "8px solid #25D366",
            }}
          />
        </div>
      </div>
    </a>
  );
};

export default AyudaComponente;
