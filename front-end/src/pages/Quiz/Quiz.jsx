import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Question from '../Question/Question';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { timer, difficulty } = location.state;

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/feedback', { state: { score, total: questions.length } });
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Quiz - Pergunta {currentQuestionIndex + 1}</h2>
      <Question 
        question={questions[currentQuestionIndex]} 
        onAnswer={handleAnswer} 
      />
    </div>
  );
}

export default Quiz;
