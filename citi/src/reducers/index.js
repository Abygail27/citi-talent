import { combineReducers } from 'redux'
import users from './cityreducers'

// Returns all the reducing functions into a single reducing function to pass into createStore
const rootReducer = combineReducers({
  users
})
export default rootReducer
