import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function Play() {
    const { getQuestion, tenQuestions } = useContext(GameContext);

    return (
        <div>
            <h2>Let's play!</h2>
            <div className='get-btn'>
            <button onClick={getQuestion}>Get Question</button>
            <button onClick={tenQuestions}>Get 10 Questions</button>
            </div>
        </div>
    );
}

export default Play;