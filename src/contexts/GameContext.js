import { useState, useEffect, createContext } from "react";
import * as API from '../services/rj-api';

export const GameContext = createContext();

export function GameProvider(props) {
    const [data, setData] = useState();
    const [isRandomClicked, setRandomClicked] = useState(false);
    const [isTenClicked, setTenClicked] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState();


    useEffect(() => {
        isRandomClicked && API.getRandomQuestion()
            .then(randomQuestion => setCurrentQuestion(randomQuestion[0]))
            .finally(setRandomClicked(false))
    }, [isRandomClicked]);

    useEffect(() => {
        isTenClicked && API.getTenQuestions()
        .then(questions => setData(questions))
        .finally(setTenClicked(false))
    }, [isTenClicked]);

    const getQuestion = () => {
        setData();
        setCurrentQuestion();
        setRandomClicked(true);
    }
    const tenQuestions = () => {
        setCurrentQuestion();
        setTenClicked(true);
    }

    const increaseScore = () => setScore(prev => prev + 1);
    const decreaseScore = () => setScore(prev => prev - 1);
    const resetScore = () => setScore(0);

    const showQuestion = (question) => setCurrentQuestion(question); 

    return (
        <GameContext.Provider value={{ 
            data, 
            getQuestion, 
            tenQuestions,
            increaseScore, 
            decreaseScore, 
            resetScore, 
            score,
            showQuestion,
            currentQuestion
        }}>
            {props.children}
        </GameContext.Provider>
    )

}