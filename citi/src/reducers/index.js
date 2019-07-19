import { combineReducers } from 'redux'
import citi from './cityreducers'

// Returns all the reducing functions into a single reducing function to pass into createStore
const rootReducer = combineReducers({
  citi
})
export default rootReducer
