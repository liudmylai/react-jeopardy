import { useState, useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function Question(props) {
    const { currentQuestion } = useContext(GameContext);
    // const {item} = props;
    const [reveal, setReveal] = useState(false);
    const handleClick = () => {
        setReveal(prev => !prev);
    }

    return (
        <>
            {currentQuestion &&
                <div className='card-info'>
                    <h2>Category: {currentQuestion.category.title}</h2>
                    <h2>Points: {currentQuestion.value}</h2>
                    <h2>{reveal ? 'Answer: ' + currentQuestion.answer : 'Question: ' + currentQuestion.question}</h2>
                    <button onClick={handleClick}>Click to Reveal {reveal ? 'Question' : 'Answer'}</button>
                </div>
            }
        </>
    );
}

export default Question;