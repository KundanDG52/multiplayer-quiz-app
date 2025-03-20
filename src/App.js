import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Austen", "Orwell"],
    answer: "Shakespeare",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
];

const App = () => {
  const [player, setPlayer] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  const handleNext = useCallback(() => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimer(15);
    } else {
      if (player === 1) {
        setPlayer(2);
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setTimer(15);
      } else {
        setGameOver(true);
      }
    }
  }, [questionIndex, player]);

  useEffect(() => {
    if (gameOver) return;

    const countdown = setTimeout(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        handleNext();
      }
    }, 1000);

    return () => clearTimeout(countdown);
  }, [timer, gameOver, handleNext]); // ✅ Now 'handleNext' is properly included

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[questionIndex].answer) {
      if (player === 1) setPlayer1Score((prev) => prev + 1);
      else setPlayer2Score((prev) => prev + 1);
    }
  };

  return (
    <div className="container">
      {gameOver ? (
        <div className="result">
          <h2>Game Over!</h2>
          <p>Player 1 Score: {player1Score}</p>
          <p>Player 2 Score: {player2Score}</p>
          <h2>
            {player1Score > player2Score
              ? "Player 1 Wins!"
              : player2Score > player1Score
              ? "Player 2 Wins!"
              : "It's a Tie!"}
          </h2>
        </div>
      ) : (
        <div className="quiz">
          <h1>Multiplayer Quiz</h1>
          <h2>Player {player}'s Turn</h2>
          <p className="question">{questions[questionIndex].question}</p>
          <div className="options">
            {questions[questionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  selectedAnswer === option ? "selected" : ""
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="timer">Time Left: {timer}s</p>
          {selectedAnswer && <button onClick={handleNext}>Next</button>}
        </div>
      )}
    </div>
  );
};

export default App;
