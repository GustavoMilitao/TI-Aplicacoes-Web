import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../../Components/UserNavbar/UsersNavbar'; 

function SelectTheme() {
  const navigate = useNavigate();

  const handleSelectTheme = () => {
    navigate('/select-settings');
  };

  return (
    <div>
      <UserNavbar />
      <h2>Select Theme</h2>
      <button onClick={handleSelectTheme}>Lógica</button>
    </div>
  );
}

export default SelectTheme;
