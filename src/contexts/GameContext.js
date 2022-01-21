import { useState, useEffect, createContext } from "react";
import * as API from '../services/rj-api';

export const GameContext = createContext();

export function GameProvider(props) {
    const [data, setData] = useState();
    const [isRandomClicked, setRandomClicked] = useState(false);
    const [isTenClicked, setTenClicked] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [reveal, setReveal] = useState(false);

    
    useEffect(() => {
        isRandomClicked && API.getRandomQuestion()
            .then(randomQuestion => setCurrentQuestion(randomQuestion[0]))
            .finally(setRandomClicked(false))
    }, [isRandomClicked]);

    useEffect(() => {
        isTenClicked && API.getTenQuestions()
            .then(questions => questions.map((element) => ({...element, isDone: false})))
            .then(questions => setData(questions))
            .finally(setTenClicked(false))
    }, [isTenClicked]);
    // function to show the random question by clickin on 'Get Question' button
    const getQuestion = () => {
        setData();
        setReveal(false);
        setCurrentQuestion();
        setRandomClicked(true);
    }
    // function to show 10 questions by clickin on 'Get 10 Questions' button
    const tenQuestions = () => {
        setCurrentQuestion();
        setTenClicked(true);
    }
    // function to increase score
    const increaseScore = () => {
        setScore(prev => prev + currentQuestion.value);
        setCurrentQuestion();
    }
    // function to decrease score
    const decreaseScore = () => {
        setScore(prev => prev - currentQuestion.value);
        setCurrentQuestion();
    }
    // function to reset score
    const resetScore = () => {
        setScore(0);
        setCurrentQuestion();
    }
    // function to change 'isDone' property if question was revealed
    const changeIsDone = (id) => {
        setData(prev => prev.map((element) => element.id === id ? {...element, isDone: true} : element));
    }
    // function to reveal the question by clicking on card
    const showQuestion = (question) => {
        changeIsDone(question.id);
        setCurrentQuestion(question);
        setReveal(false);
    }
    // function to change the status of revealing by clicking on button 
    const handleReveal = () => {
        setReveal(prev => !prev);
    }

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
            currentQuestion,
            reveal,
            handleReveal
        }}>
            {props.children}
        </GameContext.Provider>
    )

}