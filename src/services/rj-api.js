import axios from 'axios';

const baseURL = 'https://jservice.io/api/';

function getAxios(endPoint) {
    return axios.get(baseURL + endPoint)
        .then(response => response.data)
        .catch(error => console.error(error))
}

// function to get random trivia data
function getRandomQuestion() {
    return getAxios('random')
}
// function to get random trivia data that returns 10 questions
function getTenQuestions() {
    return getAxios('random?count=10');
}

export { getRandomQuestion, getTenQuestions};