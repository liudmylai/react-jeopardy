import { useState, useEffect, createContext, useReducer } from "react";
import * as API from '../services/rj-api';

export const GameContext = createContext();
// the function to update the score by clicking on the relevant button
function reducer(state, action) {
    switch (action.type) {
        case 'increase':
            return state + action.value;
        case 'decrease':
            return state - action.value;
        case 'reset':
            return 0;
        default:
            throw new Error();
    }
}

export function GameProvider(props) {
    const [data, setData] = useState();
    const [isRandomClicked, setRandomClicked] = useState(false);
    const [isTenClicked, setTenClicked] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [reveal, setReveal] = useState(false);
    const [score, dispatch] = useReducer(reducer, 0);

    useEffect(() => {
        isRandomClicked && API.getRandomQuestion()
            .then(randomQuestion => setCurrentQuestion(randomQuestion[0]))
            .finally(setRandomClicked(false))
    }, [isRandomClicked]);

    useEffect(() => {
        isTenClicked && API.getTenQuestions()
            .then(questions => questions.map((element) => ({ ...element, isDone: false })))
            .then(questions => setData(questions))
            .finally(setTenClicked(false))
    }, [isTenClicked]);
    // the function to show the random question by clicking on the 'Get Question' button
    const getQuestion = () => {
        setData();
        setReveal(false);
        setCurrentQuestion();
        setRandomClicked(true);
    }
    // the function to show 10 questions by clicking on the 'Get 10 Questions' button
    const tenQuestions = () => {
        setCurrentQuestion();
        setTenClicked(true);
    }

    // the function to hide current question after any update of the score
    const updateScore = (type) => {
        switch (type) {
            case 'increase':
            case 'decrease':
                dispatch({ type, value: currentQuestion.value });
                break;
            case 'reset':
                dispatch({ type });
                break;
        }
        setCurrentQuestion();
    }

    // the function to change the 'isDone' property if the question has been revealed
    const changeIsDone = (id) => {
        setData(prev => prev.map((element) => element.id === id ? { ...element, isDone: true } : element));
    }
    // the function of revealing the question by clicking on the card
    const showQuestion = (question) => {
        changeIsDone(question.id);
        setCurrentQuestion(question);
        setReveal(false);
    }
    // the function of changing the disclosure status by pressing a button 
    const handleReveal = () => {
        setReveal(prev => !prev);
    }

    return (
        <GameContext.Provider value={{
            data,
            getQuestion,
            tenQuestions,
            score,
            updateScore,
            showQuestion,
            currentQuestion,
            reveal,
            handleReveal
        }}>
            {props.children}
        </GameContext.Provider>
    )

}