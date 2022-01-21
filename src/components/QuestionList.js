import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import QuestionCard from './QuestionCard';

function QuestionList() {
    const { data, currentQuestion } = useContext(GameContext);
    return (
        <>
            {data && !currentQuestion && 
                <div className='card-list'>
                    {data.map((item, id) => <QuestionCard item={item} key={id} />)}
                </div>
            }
        </>
    );
}

export default QuestionList;