import {useContext} from 'react';
import { GameContext } from '../contexts/GameContext';
import Question from './Question';

function QuestionList() {
    const {data} = useContext(GameContext);
    return(
        <div>
            {data && data.map((item,id) => <Question item={item} key={id}/> )}
        </div>
    );
}

export default QuestionList;