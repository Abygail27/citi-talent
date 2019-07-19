import { combineReducers } from 'redux'
import contacts from './cityreducers'

// Returns all the reducing functions into a single reducing function to pass into createStore
const rootReducer = combineReducers({
  contacts
})
export default rootReducer
