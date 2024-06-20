import React from 'react';
import Button from '@mui/material/Button';

function Question({ question, onAnswer }) {
  const handleAnswer = (answer) => {
    const isCorrect = answer === question.correctAnswer;
    onAnswer(isCorrect);
  };

  return (
    <div>
      <h3>{question.text}</h3>
      <div>
        {question.answers.map((answer, index) => (
          <Button variant="contained" key={index} onClick={() => handleAnswer(answer)}>
            {answer + ' '}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Question;
