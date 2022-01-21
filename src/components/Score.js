import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function Score() {
    const {decreaseScore, increaseScore, resetScore, score} = useContext(GameContext);
    
    return(
        <div>
            <h2>Score: <span>{score}</span></h2>
            <div className='score'>
            <button className='decrease' onClick={decreaseScore}>Decrease</button>
            <button className='increase' onClick={increaseScore}>Increase</button>
            <button className='reset' onClick={resetScore}>Reset</button>
            </div>
        </div>
    );
}

export default Score;