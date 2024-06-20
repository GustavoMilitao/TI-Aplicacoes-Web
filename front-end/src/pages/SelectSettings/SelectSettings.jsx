import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../../Components/UserNavbar/UsersNavbar';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

function SelectSettings() {
  const [timer, setTimer] = useState(60);
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz', { state: { timer, difficulty } });
  };

  return (
    <div>
      <UserNavbar />
      <h2>Selecione as configurações do Quiz</h2>
      <br></br>
      <div>
        <TextField value={timer} onChange={(e) => setTimer(e.target.value)} id="outlined-basic" label="Timer" variant="outlined" />
      </div>
      <br></br>
      <div>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={difficulty}
            label="Dificuldade"
            onChange={(e) => setDifficulty(e.target.value)}>
            <MenuItem value={"easy"}>Fácil</MenuItem>
            <MenuItem value={"medium"}>Médio</MenuItem>
            <MenuItem value={"hard"}>Difícil</MenuItem>
          </Select>
        </FormControl>
      </div>
      <br></br>
      <Button variant="contained" onClick={handleStartQuiz}>Start Quiz</Button>
    </div>
  );
}

export default SelectSettings;
