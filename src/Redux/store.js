import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { questions, game } from './reducers'
import data from './data.json'
import randomlyAdded from '../Util/randomlyAdded'


const reducers = combineReducers({
    questions,
    game
})

const newData = randomlyAdded(data)

let preLoad = {
  questions: newData,
  game: {
    start: 0,
    end: 10, // 10 is not included
    result: {},
    score: 0,
    quizNumber: 1
  }
}

const store = createStore(reducers, preLoad, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store
