import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

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
      <h2>Resultado:</h2>
      <p>Você acertou {score} de {total} perguntas.</p>
      <br></br>
      <Button variant="contained" onClick={handleRetry}>Repetir Quiz</Button>
      <br></br>
      <br></br>
      <Button variant="contained" onClick={handleMenu}>Voltar ao Menu</Button>
    </div>
  );
}

export default Feedback;
