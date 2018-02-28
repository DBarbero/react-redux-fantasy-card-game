import { combineReducers } from 'redux'
import * as at from '../actions/actionTypes'

import boardReducer from './board'

const initialState = {
  isFirstPlayer: true
}

const turnReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.CHANGE_PLAYER:
      return { ...state, isFirstPlayer: !state.isFirstPlayer}
  }
  return state
}

const rootReducer = combineReducers({
  turn: turnReducer,
  board: boardReducer
})

export default rootReducer
