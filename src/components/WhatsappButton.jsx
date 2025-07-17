import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const numbers = [
    "5493584247937",
    "5493584247933",
    "5493512303188",
  ];

  const [selectedNumber, setSelectedNumber] = useState(numbers[0]);

  useEffect(() => {
    const lastUsed = localStorage.getItem("lastWhatsAppIndex");
    let newIndex = 0;

    if (lastUsed !== null) {
      const lastIndex = parseInt(lastUsed, 10);
      newIndex = (lastIndex + 1) % numbers.length;
    }

    localStorage.setItem("lastWhatsAppIndex", newIndex);
    setSelectedNumber(numbers[newIndex]);
  }, []);

  return (
    <a
      href={`https://wa.me/${selectedNumber}`}
      className="whatsapp-button-fixed"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
