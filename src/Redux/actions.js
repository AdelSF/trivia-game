export const ADD_TO_START = 'ADD_TO_START'
export const ADD_TO_QUIZ_NUMBER = 'ADD_TO_QUIZ_NUMBER'
export const ADD_TO_RESULT = 'ADD_TO_RESULT'
export const NEW_GAME = 'NEW_GAME'

export const addToQuizNumber = (quizNumber) => ({
    type: ADD_TO_QUIZ_NUMBER,
    payload: quizNumber
})

export const addToStartGame = (start) => ({
    type: ADD_TO_START,
    payload: start
})

export const addToResult = (result) => ({
    type: ADD_TO_RESULT,
    payload: result
})

export const newGame = (game) => ({
    type: NEW_GAME,
    payload: game
})