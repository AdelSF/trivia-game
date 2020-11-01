import { ADD_TO_START, ADD_TO_RESULT, NEW_GAME, ADD_TO_QUIZ_NUMBER } from './actions'

export function questions(state = [], action) {
  switch (action.type) {

      default:
        return state

      }
}

export function game(state = {}, action) {
  let newGame;
  switch (action.type) {
      case ADD_TO_START:
        newGame = Object.assign({}, state)
        newGame.start = action.payload
        return newGame
      case ADD_TO_QUIZ_NUMBER:
        newGame = Object.assign({}, state)
        newGame.quizNumber = action.payload
        return newGame
      case ADD_TO_RESULT:
        newGame = Object.assign({}, state)
        newGame.result[newGame.start] = action.payload
        action.payload ? newGame.score++ : null
        return newGame
      case NEW_GAME:
        return action.payload
      default:
        return state

      }
}