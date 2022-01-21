import { useState, useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function Question(props) {
    const { currentQuestion } = useContext(GameContext);
    const [reveal, setReveal] = useState(false);
    // function to change the status of revealing by clicking on button 
    const handleClick = () => {
        setReveal(prev => !prev);
    }

    return (
        <>
            {currentQuestion &&
                <div className='card-info'>
                    <h2>Category: <span>{currentQuestion.category.title}</span></h2>
                    <h2>Points: <span>{currentQuestion.value}</span></h2>
                    {reveal ? <h2>Answer: <span>{currentQuestion.answer}</span></h2> : <h2>Question: <span>{currentQuestion.question}</span></h2>}
                    <button onClick={handleClick}>Click to Reveal {reveal ? 'Question' : 'Answer'}</button>
                </div>
            }
        </>
    );
}

export default Question;