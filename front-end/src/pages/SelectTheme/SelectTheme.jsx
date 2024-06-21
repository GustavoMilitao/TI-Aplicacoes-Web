import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../../Components/UserNavbar/UsersNavbar';
import Button from '@mui/material/Button';

function SelectTheme() {
  const navigate = useNavigate();

  const handleSelectTheme = () => {
    navigate('/select-settings');
  };

  return (
    <div>
      <UserNavbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Selecione o desafio</h2>
      </div>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={handleSelectTheme}>Lógica</Button>
      </div>
    </div>
  );
}

export default SelectTheme;
