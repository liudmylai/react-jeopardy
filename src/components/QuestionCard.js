import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function QuestionCard(props) {
    const { item } = props;
    const { showQuestion } = useContext(GameContext);

    return (
        <div className='card' onClick={() => showQuestion(item)}>
                <h3>Category: {item.category.title}</h3>
                <h3>Points: {item.value}</h3>
        </div>
    );
}

export default QuestionCard;