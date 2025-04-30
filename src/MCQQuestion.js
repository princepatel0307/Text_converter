import React, { useState } from 'react';

function MCQQuestion() {
  const [questions] = useState([
    {
      question: 'What is the capital of India?',
      options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      correctAnswer: 'Delhi',
    },
    {
      question: 'Which programming language is used for building web applications?',
      options: ['Java', 'Python', 'C++', 'JavaScript'],
      correctAnswer: 'JavaScript',
    },
    // Add more questions here
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    console.log(score)
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  name={`question_${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                />
                <label>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <p>Your score: {score}</p>
    </div>
  );
}

export default MCQQuestion;