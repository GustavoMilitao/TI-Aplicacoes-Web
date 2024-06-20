import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectTheme() {
  const navigate = useNavigate();

  const handleSelectTheme = () => {
    navigate('/select-settings');
  };

  return (
    <div>
      <h2>Select Theme</h2>
      <button onClick={handleSelectTheme}>Lógica</button>
    </div>
  );
}

export default SelectTheme;
