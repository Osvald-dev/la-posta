import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "5493525530412"; // Tu número único

  return (
    <a
      data-aos="none"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="0"

      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-button-fixed"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Habla con nosotros por WhatsApp"


    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
