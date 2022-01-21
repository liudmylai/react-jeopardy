import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function QuestionCard(props) {
    const { item } = props;
    const { showQuestion } = useContext(GameContext);

    return (
        <div className='card' onClick={() => showQuestion(item)} style={{ visibility: item.isDone ? 'hidden' : 'visible' }}>
            <h3>{item.category.title}</h3>
            <h3>{item.value}</h3>
        </div>
    );
}

export default QuestionCard;