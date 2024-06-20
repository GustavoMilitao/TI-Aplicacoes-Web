import React from 'react';

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
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
