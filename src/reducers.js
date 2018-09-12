import { combineReducers } from 'redux'
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const initialState = {
  visibilitFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state, action) {
  if(typeof state === 'undefined'){
    return initialState
  }
  return state
}
