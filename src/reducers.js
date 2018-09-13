import { combineReducers } from 'redux'
import {
  ADD_TODO,
  // REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const initialState = {
  visibilitFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

// state = default
function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
    return [
      ...state,
      {
        text: action.text,
        completed: false
      }
    ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    default:
      return state
  }
}

function todoApp(state = initialState, action) {
  // state = initialState sets a default value for state
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        // using spread operator to change visibility filter in state
        ...state,
        visibilitFilter: action.filter
      }
    case ADD_TODO:
      return {
        // using spread operator to add new object to state.todos
        ...state,
        todos: todos(state.todos, action)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: todos(state.todos, action)
      }
    default:
      return state
  }
}
