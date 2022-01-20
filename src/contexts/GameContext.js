import { useState, useEffect, createContext } from "react";
import * as API from '../services/rj-api';

export const GameContext = createContext();

export function GameProvider(props) {
    const [data, setData] = useState(null);
    const [isRandomClicked, setRandomClicked] = useState(false);
    const [isTenClicked, setTenClicked] = useState(false);
    const [score, setScore] = useState(0);


    useEffect(() => {
        isRandomClicked && API.getRandomQuestion()
            .then(randomQuestion => setData(randomQuestion))
            .finally(setRandomClicked(false))
    }, [isRandomClicked]);
    useEffect(() => {
        isTenClicked && API.getTenQuestions()
        .then(questions => setData(questions))
        .finally(setTenClicked(false))
    }, [isTenClicked]);

    const getQuestion = () => setRandomClicked(true);
    const tenQuestions = () => setTenClicked(true);

    const increaseScore = () => setScore(prev => prev + 1);
    const decreaseScore = () => setScore(prev => prev - 1);
    const resetScore = () => setScore(0);

    return (
        <GameContext.Provider value={{ data, getQuestion, tenQuestions, increaseScore, decreaseScore, resetScore, score }}>
            {props.children}
        </GameContext.Provider>
    )

}