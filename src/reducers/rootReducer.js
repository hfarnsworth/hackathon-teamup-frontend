import { combineReducers } from 'redux'
import teams from "./teams"
import collaborators from "./collaborators"

export default combineReducers({
  teams,
  collaborators
})