import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import Question from './Question';
import QuestionCard from './QuestionCard';

function QuestionList() {
    const { data } = useContext(GameContext);
    return (
        <div className='card-list'>
            {data && data.map((item, id) => <QuestionCard item={item} key={id} />)}
            {/* <Question /> */}
        </div>
    );
}

export default QuestionList;