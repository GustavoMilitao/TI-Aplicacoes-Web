import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Feedback() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state;

  const handleRetry = () => {
    navigate('/select-settings');
  };

  const handleMenu = () => {
    navigate('/select-theme');
  };

  return (
    <div>
      <h2>Feedback</h2>
      <p>Você acertou {score} de {total} perguntas.</p>
      <button onClick={handleRetry}>Repetir Quiz</button>
      <button onClick={handleMenu}>Voltar ao Menu</button>
    </div>
  );
}

export default Feedback;
