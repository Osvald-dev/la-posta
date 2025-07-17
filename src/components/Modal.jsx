import React from "react";
import "../styles/Modal.css";

const Modal = ({ product, categoria, onClose }) => {
  if (!product) return null;


  const mensaje = `Hola, estoy interesado en saber más sobre ${product.name} / ${categoria}.`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h3>{product.name}</h3>
        <p>¡Envíanos un mensaje por whatsapp! Te respondemos al instante</p>
        <a
          href={`https://wa.me/5493584247937?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-whatsapp-button"
        >
          Enviar mensaje
        </a>
        <a
          href={`https://wa.me/5493584247937?text=${encodeURIComponent(`Hola, me gustaría agendar una llamada para hablar sobre ${product.name} de ${categoria}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-call-button"
        >
          Agendar llamada
        </a>
      </div>
    </div>
  );
};

export default Modal;
