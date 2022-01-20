import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function Score() {
    const {decreaseScore, increaseScore, resetScore, score} = useContext(GameContext);
    
    return(
        <div>
            <h2>Score: {score}</h2>
            <div className='score'>
            <button onClick={decreaseScore}>Decrease</button>
            <button onClick={increaseScore}>Increase</button>
            <button onClick={resetScore}>Reset</button>
            </div>
        </div>
    );
}

export default Score;