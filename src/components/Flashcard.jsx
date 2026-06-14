import { useState, useEffect } from 'react';


export default function Flashcard({ card }) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
    }, [card]);

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
        onClick={() => setIsFlipped(!isFlipped)}>
            <div className="front">
                <p>{card.question}</p>
            </div>
            <div className="back">
                <p>{card.answer}</p>
            </div>
        </div>
    );

}