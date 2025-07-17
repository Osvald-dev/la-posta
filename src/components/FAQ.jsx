import React, { useState } from "react";
import "../styles/FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "📦 ¿Hacen envíos?",
    answer: "Sí, realizamos envíos a todo el país con logística segura y confiable.",
  },
  {
    question: "📍 ¿Dónde está nuestro local?",
    answer: "Nos encontramos en Río Cuarto, Córdoba. Av. Amadeo Sabattini 3564 ¡Visítanos y conocé nuestros productos!",
  },
  {
    question: "💳 ¿Aceptan tarjetas de crédito?",
    answer: "Sí, aceptamos pagos con tarjetas de crédito, débito y transferencias bancarias.",
  },
  {
    question: "🛠️ ¿Qué garantía tienen los productos?",
    answer: "Nuestros productos cuentan con garantía de fábrica. Consultanos según el artículo de tu interés.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h3 className="faq-title">Preguntas Frecuentes</h3>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
