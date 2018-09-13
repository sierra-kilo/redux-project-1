import { combineReducers } from 'redux'
import {
  ADD_TODO,
  // REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const { SHOW_ALL } = VisibilityFilters

function visibilitFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
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
    // case REMOVE_TODO:
    //   return {
    //     state.filter((todo, index) => {
    //       if(index !== action.index) {
    //         return {
    //             todo
    //         }
    //       }
    //     })
    //   }
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

// function todoApp(state = {}, action) {
//   return {
//     visibilitFilter: visibilitFilter(state.visibilitFilter, action),
//     todos: todos(state.todos, action)
//   }
// }



// wow so much magic here! I don't like it, even though they say there is no magic here...
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
