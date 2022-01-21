import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function Score() {
    const {score, updateScore} = useContext(GameContext);
    
    return(
        <div>
            <h2>Score: <span>{score}</span></h2>
            <div className='score'>
            <button className='decrease' onClick={()=>updateScore('decrease')}>Decrease</button>
            <button className='increase' onClick={()=>updateScore('increase')}>Increase</button>
            <button className='reset' onClick={()=>updateScore('reset')}>Reset</button>
            </div>
        </div>
    );
}

export default Score;