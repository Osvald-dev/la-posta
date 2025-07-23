import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goBack = () => navigate(-1);

  return (
    <button
      className={`btn-volver-atras ${showButton ? 'show' : ''}`}
      onClick={goBack}
      aria-label="Volver"
    >
      <span className="flecha">←</span>
    </button>
  );
};

export default BackButton;
