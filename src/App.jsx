import './App.css';
import { useState } from 'react';
import { flashcardData } from './data/flashcardData';
import Flashcard from './components/Flashcard';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, flashcardData.length - 1)
    );
  };

  const goBack = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Trivia Flashcards!</h1>
        <h2>How well do you know your trivia?</h2>
        <p className="total-count">Total Cards: {flashcardData.length}</p>
      </div>
      <Flashcard
        card={flashcardData[currentIndex]}
        currentIndex={currentIndex}
        cardCount={flashcardData.length}
        onNext={goNext}
        onBack={goBack}
      />
    </div>
  );
};

export default App;