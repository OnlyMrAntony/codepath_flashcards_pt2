import './App.css';
import { useState } from 'react';
import { flashcardData } from './data/flashcardData';
import Flashcard from './components/Flashcard';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(() => 
    Math.floor(Math.random() * flashcardData.length)
  );

  const getRandomCard = () => {
    let newIndex;
    
    if (flashcardData.length > 1) {
      do {
        newIndex = Math.floor(Math.random() * flashcardData.length);
      } while (newIndex === currentIndex);
    } else {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Trivia Flashcards!</h1>
        <h2>How well do you know your trivia?</h2>
        <p className = "total-count">Total Cards: {flashcardData.length}</p>
      </div>
      <Flashcard card={flashcardData[currentIndex]} />
      <button className="next-button" onClick={getRandomCard}>Next Card</button>
    </div>
  )
}

export default App