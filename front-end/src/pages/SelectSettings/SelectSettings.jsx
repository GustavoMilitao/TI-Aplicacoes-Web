import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectSettings() {
  const [timer, setTimer] = useState(60);
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz', { state: { timer, difficulty } });
  };

  return (
    <div>
      <h2>Select Settings</h2>
      <div>
        <label>Timer: </label>
        <input type="number" value={timer} onChange={(e) => setTimer(e.target.value)} />
      </div>
      <div>
        <label>Dificuldade: </label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Fácil</option>
          <option value="medium">Médio</option>
          <option value="hard">Difícil</option>
        </select>
      </div>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default SelectSettings;
