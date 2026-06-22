import { useState, useEffect } from 'react';

export default function Flashcard({ card, currentIndex, cardCount, onNext, onBack }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    setIsFlipped(false);
    setGuess('');
    setFeedback(null);
  }, [card]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedGuess = guess.trim().toLowerCase();
    const normalizedAnswer = card.answer.trim().toLowerCase();

    if (!normalizedGuess) {
      return;
    }

    if (normalizedGuess === normalizedAnswer) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  return (
    <div className="flashcard-card">
      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped((prev) => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setIsFlipped((prev) => !prev);
          }
        }}
      >
        <div className="front">
          <p>{card.question}</p>
        </div>
        <div className="back">
          <p>{card.answer}</p>
        </div>
      </div>

      <form className="guess-form" onSubmit={handleSubmit}>
        <label htmlFor="guess-input" className="guess-label">
          Enter your guess before flipping:
        </label>
        <div className="guess-controls">
          <input
            id="guess-input"
            className={`guess-input ${feedback ? feedback : ''}`}
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Type your answer"
            aria-describedby="guess-feedback"
          />
          <button className="guess-submit" type="submit">
            Submit
          </button>
        </div>
      </form>

      <p id="guess-feedback" className={`feedback ${feedback ? feedback : ''}`}>
        {feedback === 'correct'
          ? 'Correct! Great job.'
          : feedback === 'incorrect'
          ? 'Incorrect answer. Try again.'
          : 'Submit a guess to check your answer.'}
      </p>

      <div className="card-navigation">
        <button
          className="nav-button"
          type="button"
          onClick={onBack}
          disabled={currentIndex === 0}
        >
          Back
        </button>
        <span className="card-position">
          Card {currentIndex + 1} of {cardCount}
        </span>
        <button
          className="nav-button"
          type="button"
          onClick={onNext}
          disabled={currentIndex === cardCount - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
